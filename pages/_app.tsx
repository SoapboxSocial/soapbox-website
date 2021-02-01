import type { AppProps } from "next/app";
import { Fragment } from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../styles/globals.css";

export default function SoapboxApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navigation />

      <Component {...pageProps} />

      <Footer />
    </Fragment>
  );
}
