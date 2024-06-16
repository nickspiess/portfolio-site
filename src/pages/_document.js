// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import UAParser from 'ua-parser-js';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let ua;
    if (ctx.req) {
      const userAgent = ctx.req.headers['user-agent'];
      ua = UAParser(userAgent);
    } else {
      ua = UAParser(); // Default UA parsing for client-side
    }
    return { ...initialProps, ua };
  }

  render() {
    const { ua } = this.props;
    const isMobile = ua.device.type === 'mobile';
    return (
      <Html lang="en">
        <Head>
          <link rel="logo" href="favicon.ico" />
        </Head>
        <body className={isMobile ? 'mobile' : 'desktop'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
