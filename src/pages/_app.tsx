import type { NextPageContext } from "next";
import type { AppProps } from "next/app";

interface MyAppProps extends AppProps {
  ctx: NextPageContext;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
