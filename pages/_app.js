import HeadLayout from "../layout/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadLayout>
        <Component {...pageProps} />
      </HeadLayout>
    </>
  );
}

export default MyApp;
