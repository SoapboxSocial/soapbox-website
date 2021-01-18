import Head from "next/head";
import Page from "../components/page";

export default function Custom404() {
  return (
    <Page>
      <main className="main">
        <Head>
          <title>404: This page could not be found.</title>
        </Head>

        <h1>This page could not be found.</h1>
      </main>
    </Page>
  );
}
