import Head from "next/head";

export default function Support() {
  return (
    <main className="main">
      <Head>
        <title>Support</title>
      </Head>

      <h1 hidden>Support</h1>

      <p className="summary">Get help from the Soapbox Team.</p>

      <a className="button" href="mailto:support@soapbox.social">
        Contact us
      </a>
    </main>
  );
}
