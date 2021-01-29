import type { GetStaticPaths, InferGetStaticPropsType } from "next";
import hydrate from "next-mdx-remote/hydrate";
import Meta from "../../components/meta";
import { getAllPosts, getPostBySlug } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ slug, meta, source }: Props) {
  const content = hydrate(source);

  return (
    <main className="p-5">
      <Meta
        title={meta.title}
        description={meta.summary}
        url={`https://soapbox.social/blog/${slug}`}
      />

      <div className="max-w-lg mx-auto">
        <h1>{meta.title}</h1>

        <div className="h-5" />

        <div className="prose">{content}</div>
      </div>
    </main>
  );
}

export const getStaticProps = async ({ params }) => {
  return {
    props: await getPostBySlug(params.slug),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
