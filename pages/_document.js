import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />

          {process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
            <meta name="robots" content="noindex ,nofollow"></meta>
          )}
          {process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
            <meta name="googlebot" content="noindex"></meta>
          )}
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
