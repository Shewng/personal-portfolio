import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom document to allow for Google Fonts.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Duru+Sans&family=Fira+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Kolker+Brush&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
          <link />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
