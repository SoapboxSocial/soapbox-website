import Head from "next/head";
import Page from "../components/page";
import Room from "../components/room";

export default function HomePage() {
  return (
    <Page>
      <Head>
        <title>Soapbox</title>
      </Head>

      <main className="main">
        <Room roomName="Soapbox" buttonText="Join in" />

        <p className="summary">
          A drop-in audio chat app to have casual conversations with strangers
          and friends.
        </p>

        <a
          className="badge"
          href="https://apps.apple.com/us/app/soapbox-talk-with-anyone/id1529283270"
          aria-label="Download on the App Store"
        />
      </main>
    </Page>
  );
}
