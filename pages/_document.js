import Document, { Html, Head, Main, NextScript } from "next/document";
import { jsonLdScriptProps } from "react-schemaorg";

export default class SoapboxDocument extends Document {
  render() {
    return (
      <Html lang="en" className="text-base sm:text-xl">
        <Head>
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
          <link rel="preload" as="image" href="/badge_black.svg" />
          <link rel="preload" as="image" href="/badge_white.svg" />
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

          {/* HTML Meta Tags */}
          <meta
            name="description"
            content="A drop-in audio chat app to have casual conversations with strangers and friends."
          />

          {/* Apple Meta Tag */}
          <meta name="apple-itunes-app" content="app-id=1529283270" />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://soapbox.social" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Soapbox" />
          <meta
            property="og:description"
            content="A drop-in audio chat app to have casual conversations with strangers and friends."
          />
          <meta
            property="og:image"
            content="https://soapbox.social/thumb.jpg"
          />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="soapbox.social" />
          <meta property="twitter:url" content="https://soapbox.social" />
          <meta name="twitter:title" content="Soapbox" />
          <meta
            name="twitter:description"
            content="A drop-in audio chat app to have casual conversations with strangers and friends."
          />
          <meta
            name="twitter:image"
            content="https://soapbox.social/thumb.jpg"
          />

          {/* Structured Text */}
          <script
            {...jsonLdScriptProps({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Soapbox",
              url: "https://soapbox.social",
              logo: "https://soapbox.social/brand.png",
            })}
          />
          <script
            {...jsonLdScriptProps({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Soapbox: Talk with anyone",
              operatingSystem: "iOS",
              applicationCategory: "SocialNetworkingApplication",
            })}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
