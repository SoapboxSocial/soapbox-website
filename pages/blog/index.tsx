import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Meta from "../../components/meta";
import PostPreview from "../../components/post-preview";
import { getAllPostsWithData } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ posts }: Props) {
  return (
    <main className="py-20 px-5">
      <Meta title="Our Soapbox" url="https://soapbox.social/blog" />

      <div className="max-w-sm mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none text-prose-primary">
            Our Soapbox
          </h1>

          <div className="h-4" />

          <p className="text-prose-secondary">A blog by the Soapbox team.</p>
        </div>

        <div className="h-20" />

        <ul className="space-y-5">
          {posts.map(({ slug, meta }, i) => (
            <li key={i}>
              <Link href={`/blog/${slug}`}>
                <a>
                  <PostPreview
                    authors={meta.authors}
                    date={meta.date}
                    title={meta.title}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
