import HeadLayout from "../layout/head";
import "../styles/globals.scss";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <HeadLayout>
          <Component {...pageProps} />
        </HeadLayout>
      </Provider>
    </>
  );
}

export default MyApp;
