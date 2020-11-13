import Head from "next/head";

export default function Home() {
  return (
    <main className="main">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Soapbox</title>
        <link
          rel="preload"
          href="/SFRounded-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/SFRounded-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8359fe" />
        <meta name="theme-color" content="#8359fe" />
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
