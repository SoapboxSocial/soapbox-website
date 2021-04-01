import dayjs from "dayjs";
import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import Meta from "../../components/meta";
import { getAllPostsWithData } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ posts }: Props) {
  return (
    <main className="p-5">
      <Meta title="Our Soapbox" url="https://soapbox.social/blog" />

      <div className="max-w-lg mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none text-prose-primary">
            Our Soapbox
          </h1>

          <div className="h-2" />

          <p className="text-prose-secondary">A blog by the Soapbox team.</p>
        </div>

        <div className="h-8" />

        <ul className="space-y-12">
          {posts
            .sort((a, b) => (dayjs(a.meta.date).isAfter(b.meta.date) ? -1 : 1))
            .map(({ slug, meta }, i) => (
              <li key={i}>
                <article className="space-y-2">
                  <p className="text-sm leading-none text-gray-400">
                    {dayjs(meta.date).format("MMMM D, YYYY")}
                  </p>

                  <Link href={`/blog/${slug}`}>
                    <a className="block ">
                      <h2 className="text-2xl font-bold">{meta.title}</h2>
                    </a>
                  </Link>

                  {typeof meta.thumb === "string" && (
                    <Link href={`/blog/${slug}`}>
                      <a className="flex">
                        <Image
                          className="bg-soapbox"
                          src={meta.thumb}
                          width={640}
                          height={320}
                          objectFit="cover"
                          objectPosition="top"
                          alt={meta.title}
                        />
                      </a>
                    </Link>
                  )}

                  {typeof meta.summary === "string" && (
                    <p className="text-base text-gray-500">{meta.summary}</p>
                  )}
                </article>
              </li>
            ))}
        </ul>
      </div>

      <style jsx global>{`
        body {
          background-color: #fff;
        }
      `}</style>
    </main>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getAllPostsWithData(),
    },
  };
};
