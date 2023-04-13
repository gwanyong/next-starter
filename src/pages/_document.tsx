import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="__portal" />
        </body>
      </Html>
    );
  }
}
