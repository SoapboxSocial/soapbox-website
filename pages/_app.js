import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

export default function SoapboxApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Header />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
