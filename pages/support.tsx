import Meta from "../components/meta";
import { CONTACT_URL } from "../constants";

export default function SupportPage() {
  return (
    <main className="main">
      <Meta title="Support" />

      <h1 hidden>Support</h1>

      <p className="summary">Get help from the Soapbox Team.</p>

      <a className="button" href={CONTACT_URL}>
        Contact us
      </a>
    </main>
  );
}
