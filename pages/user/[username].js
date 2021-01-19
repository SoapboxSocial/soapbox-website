import Head from "next/head";
import Page from "../../components/page";

export default function UserPage() {
  return (
    <Page>
      <Head>
        <title>Soapbox: Follow @dean</title>
      </Head>

      <main className="main">
        <div className="space-y-4">
          <img
            alt="Dean"
            src="/dean.png"
            className="rounded-full h-24 w-24 mx-auto"
            draggable="false"
          />

          <div className="text-center">
            <h1 className="text-3xl font-medium">Dean</h1>

            <p className="text-lg text-black opacity-50">@dean</p>
          </div>

          <a href="" className="button">
            Follow
          </a>
        </div>
      </main>
    </Page>
  );
}
