import { AppProps } from "next/app";
import "../assets/globals.css";
import "../assets/scss/run.scss"
import '../assets/js/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
