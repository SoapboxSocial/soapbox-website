import Footer from "../components/footer";
import "../styles/globals.css";

export default function SoapboxApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
