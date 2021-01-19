import Head from "next/head";
import Page from "../components/page";

export default function SupportPage() {
  return (
    <Page>
      <Head>
        <title>Support</title>
      </Head>

      <main className="main">
        <h1 hidden>Support</h1>

        <p className="summary">Get help from the Soapbox Team.</p>

        <a className="button" href="mailto:support@soapbox.social">
          Contact us
        </a>
      </main>
    </Page>
  );
}
