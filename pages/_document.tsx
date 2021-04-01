import Document, { Head, Html, Main, NextScript } from "next/document";
import { jsonLdScriptProps } from "react-schemaorg";
import { Organization, MobileApplication } from "schema-dts";

export default class SoapboxDocument extends Document {
  render() {
    return (
      <Html lang="en" className="text-base sm:text-xl overflow-x-hidden">
        <Head>
          {/* Font Preload Tags */}
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

          {/* Favicon Tags */}
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
          <meta name="theme-color" content="#8359fe" />

          {/* Structured Text Tags */}
          <script
            {...jsonLdScriptProps<Organization>({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Soapbox",
              url: "https://soapbox.social",
              logo: "https://soapbox.social/brand.png",
            })}
          />
          <script
            {...jsonLdScriptProps<MobileApplication>({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Soapbox: Talk with anyone",
              operatingSystem: "iOS",
              applicationCategory: "SocialNetworkingApplication",
              installUrl:
                "https://apps.apple.com/us/app/soapbox-talk-with-anyone/id1529283270",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: 77,
              },
            })}
          />
        </Head>

        <body className="flex flex-col min-h-screen">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
