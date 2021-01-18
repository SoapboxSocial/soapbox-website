import Head from "next/head";
import Page from "../components/page";

export default function Home() {
  return (
    <Page>
      <main className="main">
        <Head>
          <title>Soapbox</title>
        </Head>

        <div className="room">
          <div className="room-title">Soapbox</div>
          <div className="room-content">
            <div className="room-users">
              <img
                alt="Dean"
                src="/dean.png"
                className="room-head"
                draggable="false"
              />
              <img
                alt="Jeff"
                src="/jeff.png"
                className="room-head"
                draggable="false"
              />
              <img
                alt="Unicorn"
                src="/unicorn.png"
                className="room-head"
                draggable="false"
              />
            </div>
            <a
              href="https://apps.apple.com/us/app/soapbox-talk-with-anyone/id1529283270"
              className="room-button"
            >
              Join in
            </a>
          </div>
        </div>

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
