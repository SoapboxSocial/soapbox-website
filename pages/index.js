import Head from "next/head";

export default function Home() {
  return (
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
            href="https://testflight.apple.com/join/Iyatu5cO"
            className="room-button"
          >
            Join in
          </a>
        </div>
      </div>

      <p className="summary">
        A drop-in audio chat app to have casual conversations with strangers and
        friends.
      </p>

      <a className="button" href="https://testflight.apple.com/join/Iyatu5cO">
        Available on TestFlight
      </a>
    </main>
  );
}
