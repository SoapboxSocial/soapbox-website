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
        <Room roomName="ETH PUMPING BABY" buttonText="Join in" />
      </main>
    </Page>
  );
}
