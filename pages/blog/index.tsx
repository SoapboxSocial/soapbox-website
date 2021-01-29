import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import PostPreview from "../../components/post-preview";
import { getAllPostsWithData } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ posts }: Props) {
  return (
    <main className="py-20 px-5">
      <div className="max-w-sm mx-auto">
        <div className="prose text-center">
          <h1>Our Soapbox</h1>
        </div>

        <div className="h-20" />

        <ul className="space-y-8">
          {posts?.map(({ slug, meta }, i) => (
            <li key={i}>
              <Link href={`/blog/${slug}`}>
                <a>
                  <PostPreview title={meta.title} date={meta.date} />
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
