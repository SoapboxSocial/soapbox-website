import Meta from "../components/meta";
import Page from "../components/page";
import { CONTACT_URL } from "../constants";

export default function SupportPage() {
  return (
    <Page>
      <Meta title="Support" />

      <main className="main">
        <h1 hidden>Support</h1>

        <p className="summary">Get help from the Soapbox Team.</p>

        <a className="button" href={CONTACT_URL}>
          Contact us
        </a>
      </main>
    </Page>
  );
}
