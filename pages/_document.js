import Document, { Head, Html, Main, NextScript } from "next/document";
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
