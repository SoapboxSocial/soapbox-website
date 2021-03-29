import type { AppProps } from "next/app";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import useFathom from "../hooks/useFathom";
import "../styles/globals.css";

export default function SoapboxApp({ Component, pageProps }: AppProps) {
  useFathom();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
