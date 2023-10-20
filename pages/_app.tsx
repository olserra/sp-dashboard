import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

import React from "react";
import { Windmill } from "@roketid/windmill-react-ui";

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <Windmill usePreferences={true}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Windmill>
  );
};
export default App;
