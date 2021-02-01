import type { GetStaticPaths, InferGetStaticPropsType } from "next";
import hydrate from "next-mdx-remote/hydrate";
import Image from "next/image";
import Meta from "../../components/meta";
import { getAllPosts, getPostBySlug } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ slug, meta, source }: Props) {
  const content = hydrate(source);

  const hasAuthors = meta?.authors?.length > 0;

  return (
    <main className="p-5">
      <Meta
        title={meta.title}
        description={meta.summary}
        url={`https://soapbox.social/blog/${slug}`}
      />

      <div className="max-w-2xl w-full mx-auto p-5 md:p-10 bg-white rounded-room">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold leading-none">{meta.title}</h1>

          <p>
            <strong>{meta.date}</strong>
          </p>

          {hasAuthors && (
            <div className="flex -space-x-2">
              {meta.authors.map((member, i: number) => (
                <div key={i} className="flex room-head overflow-visible">
                  <Image
                    height={50}
                    width={50}
                    className="room-head object-cover object-center rounded-full"
                    draggable="false"
                    src={member.image}
                    alt={member.displayName}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="h-8" />

        <div className="prose max-w-none">{content}</div>
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
