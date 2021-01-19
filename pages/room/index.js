import Head from "next/head";
import Page from "../../components/page";
import Room from "../../components/room";

export default function RoomPage() {
  return (
    <Page>
      <Head>
        <title>Soapbox</title>
      </Head>

      <main className="main">
        <Room />
      </main>
    </Page>
  );
}
