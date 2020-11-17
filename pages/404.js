import Head from "next/head";

export default function Custom404() {
  return (
    <main className="main">
      <Head>
        <title>404: This page could not be found.</title>
      </Head>

      <h1>This page could not be found.</h1>
    </main>
  );
}
