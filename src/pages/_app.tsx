import "../../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";

import AuthContextProvider from "../contexts/authContext";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </MantineProvider>
    </>
  );
}
