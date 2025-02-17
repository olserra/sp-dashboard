interface ITableData {
  avatar: string;
  name: string;
  job: string;
  amount: number;
  status: "success" | "danger" | "warning" | "neutral" | "primary" | undefined;
  date: string;
}

const tableData: ITableData[] = [
  {
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Chandler Jacobi",
    job: "Direct Security Executive",
    amount: 32,
    status: "primary",
    date: "Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Monserrat Marquardt",
    job: "Forward Accountability Producer",
    amount: 41,
    status: "danger",
    date: "Fri Nov 29 2023 10:43:17 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    name: "Lonie Wyman",
    job: "Legacy Program Director",
    amount: 21,
    status: "success",
    date: "Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    name: "Corine Abernathy",
    job: "Chief Factors Planner",
    amount: 33,
    status: "warning",
    date: "Fri Jun 21 2023 20:21:55 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    name: "Lorenz Botsford",
    job: "Central Accountability Developer",
    amount: 15,
    status: "neutral",
    date: "Wed Aug 28 2023 15:31:43 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Everette Botsford",
    job: "Product Group Architect",
    amount: 22,
    status: "success",
    date: "Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Marilou Beahan",
    job: "Future Security Planner",
    amount: 25,
    status: "success",
    date: "Mon Oct 28 2023 14:44:31 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/80.jpg",
    name: "Ceasar Sauer",
    job: "Direct Brand Specialist",
    amount: 11,
    status: "primary",
    date: "Tue Jul 23 2023 00:24:44 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Rae McDermott",
    job: "Lead Branding Engineer",
    amount: 502.69,
    status: "danger",
    date: "Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Mable Steuber",
    job: "National Group Executive",
    amount: 19,
    status: "danger",
    date: "Mon Sep 09 2023 12:03:25 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/74.jpg",
    name: "Julian Glover",
    job: "Global Branding Assistant",
    amount: 16,
    status: "danger",
    date: "Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    name: "Duncan Toy",
    job: "Central Intranet Manager",
    amount: 15,
    status: "danger",
    date: "Sun Nov 17 2023 11:59:50 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/81.jpg",
    name: "Blanche Friesen",
    job: "Forward Identity Executive",
    amount: 24,
    status: "danger",
    date: "Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Orion Koepp",
    job: "Global Accountability Strategist",
    amount: 6,
    status: "danger",
    date: "Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
    name: "Dakota Vandervort",
    job: "Future Assurance Coordinator",
    amount: 7,
    status: "danger",
    date: "Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    name: "Lily Collier",
    job: "Forward Configuration Orchestrator",
    amount: 41,
    status: "danger",
    date: "Sun Aug 18 2023 14:52:01 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/63.jpg",
    name: "Kayleigh Schumm",
    job: "Central Division Agent",
    amount: 65.54,
    status: "danger",
    date: "Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    name: "General McGlynn",
    job: "Central Web Analyst",
    amount: 30,
    status: "danger",
    date: "Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Shayna Schumm",
    job: "Future Directives Engineer",
    amount: 31,
    status: "danger",
    date: "Wed Jul 03 2023 10:01:06 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Giovanna Sanford",
    job: "Dynamic Interactions Executive",
    amount: 3,
    status: "danger",
    date: "Tue Oct 08 2023 17:08:43 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Emie Mante",
    job: "Direct Factors Supervisor",
    amount: 14,
    status: "danger",
    date: "Wed Jul 24 2023 19:17:16 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Chance Muller",
    job: "Lead Usability Planner",
    amount: 9,
    status: "danger",
    date: "Sun Dec 01 2023 14:04:10 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Armani Torphy",
    job: "Forward Functionality Analyst",
    amount: 4,
    status: "danger",
    date: "Tue Dec 24 2023 13:28:36 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Braeden Ward",
    job: "Central Integration Director",
    amount: 58,
    status: "danger",
    date: "Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    name: "Malcolm Price",
    job: "District Program Planner",
    amount: 18,
    status: "danger",
    date: "Thu Oct 24 2023 07:09:03 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "Susan Jast",
    job: "Future Paradigm Associate",
    amount: 25,
    status: "danger",
    date: "Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Torrey Reynolds",
    job: "Lead Security Agent",
    amount: 44,
    status: "danger",
    date: "Mon Oct 28 2023 04:10:39 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    name: "Travon Harber",
    job: "Legacy Marketing Facilitator",
    amount: 4,
    status: "danger",
    date: "Sat Nov 09 2023 05:04:09 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Hattie Gutkowski",
    job: "Chief Configuration Supervisor",
    amount: 7,
    status: "danger",
    date: "Tue Oct 22 2023 22:36:23 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Demarco Lang",
    job: "Investor Program Designer",
    amount: 5,
    status: "danger",
    date: "Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Glennie Ziemann",
    job: "Dynamic Interactions Analyst",
    amount: 59,
    status: "danger",
    date: "Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/73.jpg",
    name: "Alta Howe",
    job: "District Intranet Executive",
    amount: 4,
    status: "danger",
    date: "Sat Oct 12 2023 22:57:22 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "Sydnee Gottlieb",
    job: "Global Response Specialist",
    amount: 86,
    status: "danger",
    date: "Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Arlene Schmitt",
    job: "Lead Metrics Consultant",
    amount: 36,
    status: "danger",
    date: "Thu Oct 03 2023 08:47:32 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/98.jpg",
    name: "Hilda Schoen",
    job: "National Solutions Facilitator",
    amount: 26,
    status: "danger",
    date: "Wed Dec 04 2023 06:28:30 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "Chase Bahringer",
    job: "Dynamic Communications Designer",
    amount: 45,
    status: "danger",
    date: "Mon Nov 25 2023 16:59:38 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Lucile Hansen",
    job: "Customer Usability Facilitator",
    amount: 9,
    status: "danger",
    date: "Sun Aug 25 2023 17:15:59 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    name: "Mollie Heaney",
    job: "Forward Communications Director",
    amount: 3,
    status: "danger",
    date: "Mon Jul 22 2023 01:45:19 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Bennie Kuvalis",
    job: "Future Factors Agent",
    amount: 45,
    status: "danger",
    date: "Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    name: "Jodie Luettgen",
    job: "Customer Implementation Associate",
    amount: 39,
    status: "danger",
    date: "Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    name: "Bethel Quitzon",
    job: "Dynamic Web Strategist",
    amount: 18,
    status: "danger",
    date: "Sun Dec 29 2023 18:56:54 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Jon Dietrich",
    job: "Legacy Creative Planner",
    amount: 43,
    status: "danger",
    date: "Sun Dec 29 2023 11:11:34 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/89.jpg",
    name: "Nakia Kihn",
    job: "Central Interactions Coordinator",
    amount: 8,
    status: "danger",
    date: "Sun Sep 15 2023 06:43:56 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Assunta Grady",
    job: "Investor Operations Specialist",
    amount: 17,
    status: "danger",
    date: "Tue Dec 17 2023 01:46:37 GMT-0300 (Brasilia Standard Time)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Lukas Klocko",
    job: "Human Usability Associate",
    amount: 5,
    status: "danger",
    date: "Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)",
  },
];

export default tableData;
export type { ITableData };
