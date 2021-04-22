import type { MdxRemote } from "next-mdx-remote/types";
import Image from "next/image";
import { TwitterTweetEmbed } from "react-twitter-embed";

export const mdxComponents: MdxRemote.Components = {
  TwitterTweetEmbed,
  img: ({ src, alt }) => (
    <Image
      width={640}
      height={498}
      src={src}
      alt={alt ?? ""}
      key={src}
      objectFit="cover"
      objectPosition="center"
    />
  ),
};
