/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute {
  path?: string;
  icon?: string;
  name: string;
  routes?: IRoute[];
  checkActive?(pathname: String, route: IRoute): boolean;
  exact?: boolean;
}

export function routeIsActive(pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route);
  }

  return route?.exact
    ? pathname == route?.path
    : route?.path
    ? pathname.indexOf(route.path) === 0
    : false;
}

const routes: IRoute[] = [
  {
    path: "/admin", // the url
    icon: "PeopleIcon", // the component being exported from icons/index.js
    name: "People", // name that appear in Sidebar
    exact: true,
  },
  {
    path: "/admin/create",
    icon: "FormsIcon",
    name: "Create",
  },
  {
    path: "/admin/cards",
    icon: "CardsIcon",
    name: "Courses",
  },
  // {
  //   path: "/admin/charts",
  //   icon: "ChartsIcon",
  //   name: "Charts",
  // },
  // {
  //   icon: "PagesIcon",
  //   name: "Pages",
  //   routes: [
  //     // submenu
  //     {
  //       path: "/admin/login",
  //       name: "Login",
  //     },
  //     {
  //       path: "/admin/create-account",
  //       name: "Create account",
  //     },
  //     {
  //       path: "/admin/forgot-password",
  //       name: "Forgot password",
  //     },
  //     {
  //       path: "/admin/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/admin/blank",
  //       name: "Blank",
  //     },
  //   ],
  // },
];

export type { IRoute };
export default routes;
