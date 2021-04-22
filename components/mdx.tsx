import type { MdxRemote } from "next-mdx-remote/types";
import Image from "next/image";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";

export const mdxComponents: MdxRemote.Components = {
  TwitterTweetEmbed: (props) => (
    <div className="tweet">
      <TwitterTweetEmbed {...props} />

      <style jsx global>{`
        .tweet > div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  ),
  img: ({ src, alt }) => (
    <Image
      width={640}
      height={498}
      src={src}
      alt={alt ?? ""}
      className="bg-soapbox"
      key={src}
      objectFit="cover"
      objectPosition="center"
    />
  ),
  a: ({ href, children }) => {
    const isExternalLink = href.startsWith("http");

    if (isExternalLink) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  },
};
