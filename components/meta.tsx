import Head from "next/head";
import { ReactNode } from "react";

export default function Meta({
  title = "Soapbox",
  description = "A drop-in audio chat app to have casual conversations with strangers and friends.",
  image = "https://soapbox.social/thumb.jpg",
  url = "https://soapbox.social",
  twitterCardType = "summary_large_image",
  appleItunesApp = "app-id=1529283270",
  extra,
}: {
  appleItunesApp?: string;
  description?: string;
  extra?: ReactNode;
  image?: string;
  title?: string;
  twitterCardType?: "summary" | "summary_large_image";
  url?: string;
}) {
  return (
    <Head>
      <title>{title}</title>

      {/* HTML Meta Tags */}
      <meta name="description" content={description} />

      {/* Apple Meta Tag */}
      <meta name="apple-itunes-app" content={appleItunesApp} />

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta property="twitter:domain" content="soapbox.social" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:site" content="@joinsoapbox" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra Meta Tags */}
      {extra}
    </Head>
  );
}
