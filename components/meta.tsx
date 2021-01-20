import { Fragment } from "react";

export default function Meta({
  title = "Soapbox",
  description = "A drop-in audio chat app to have casual conversations with strangers and friends.",
  image = "https://soapbox.social/thumb.jpg",
  url = "https://soapbox.social",
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) {
  return (
    <Fragment>
      {/* HTML Meta Tags */}
      <meta name="description" content={description} />

      {/* Apple Meta Tag */}
      <meta name="apple-itunes-app" content="app-id=1529283270" />

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="soapbox.social" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:site" content="@joinsoapbox" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Fragment>
  );
}
