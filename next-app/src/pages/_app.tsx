import { AppProps } from "next/app";
import "../assets/globals.css";
import "../assets/scss/run.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
