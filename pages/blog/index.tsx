import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getAllPostsWithData } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ posts }: Props) {
  return (
    <main className="flex-1 p-5">
      <div className="prose mx-auto">
        <h1>Our Soapbox</h1>

        <ul>
          {posts?.map(({ slug, meta }, i) => (
            <li key={i}>
              <Link href={`/blog/${slug}`}>
                <a>{meta.title}</a>
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
