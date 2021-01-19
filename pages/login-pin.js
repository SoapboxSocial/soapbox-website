import Head from "next/head";
import Page from "../components/page";

export default function LoginPinPage() {
  return (
    <Page>
      <Head>
        <title>Soapbox</title>
      </Head>

      <main className="main">
        <h1>
          Logging you in...{" "}
          <span role="img" aria-label="Soap">
            🧼
          </span>
        </h1>
      </main>
    </Page>
  );
}
