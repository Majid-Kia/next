import "../styles/global.scss";
// import Script from "next/script";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your title</title>
        <meta name="description" content="Your description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MJ3RHZR');
      `}
      </Script> */}
      <Component {...pageProps} />
    </>
  );
}
