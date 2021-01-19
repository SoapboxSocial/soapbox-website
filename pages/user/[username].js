import Head from "next/head";
import Page from "../../components/page";

export default function UserPage() {
  return (
    <Page>
      <Head>
        <title>Soapbox: Follow @dean</title>
      </Head>

      <main className="main">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <img
              alt="Dean"
              src="/dean.png"
              className="rounded-full h-24 w-24 mx-auto"
              draggable="false"
            />

            <div>
              <h1 className="text-2xl leading-tight font-bold">Dean</h1>

              <p className="text-md text-black opacity-50">@dean</p>
            </div>

            <p>i built this 👷🏽‍♂️</p>
          </div>

          <div className="text-center">
            <a
              href="#!"
              className="inline-flex px-6 py-2 text-xl font-medium rounded-full bg-brand text-white"
            >
              Follow
            </a>
          </div>
        </div>
      </main>
    </Page>
  );
}
