import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../styles/globals.css";

export default function SoapboxApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
