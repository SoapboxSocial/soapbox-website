import type { GetStaticPaths, InferGetStaticPropsType } from "next";
import hydrate from "next-mdx-remote/hydrate";
import PostPreview from "../../components/post-preview";
import { getAllPosts, getPostBySlug } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ slug, meta, source }: Props) {
  const content = hydrate(source);

  return (
    <main className="flex-1 p-5">
      <div className="max-w-lg mx-auto">
        <PostPreview title={meta.title} date="Feb 3, 21" />

        <div className="h-5" />

        <div className="prose sm:px-5 crop">{content}</div>
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
