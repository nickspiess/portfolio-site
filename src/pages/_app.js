import '../styles/globals.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {


  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <Component {...pageProps} />
    </>
  )
}
