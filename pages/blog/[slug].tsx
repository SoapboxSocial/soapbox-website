import type { GetStaticPaths, InferGetStaticPropsType } from "next";
import hydrate from "next-mdx-remote/hydrate";
import RoomPreview from "../../components/room-preview";
import { getAllPosts, getPostBySlug } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ slug, meta, source }: Props) {
  const content = hydrate(source);

  return (
    <main className="flex-1 p-5">
      <div className="max-w-lg mx-auto">
        <RoomPreview
          roomName={meta.title}
          roomMembers={[
            {
              displayName: "Dean",
              image: "/dean.png",
            },
            {
              displayName: "Jeff",
              image: "/jeff.png",
            },
          ]}
          buttonText="Feb 3, 2020"
          buttonLink=""
        />

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
