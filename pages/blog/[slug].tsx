import dayjs from "dayjs";
import type { GetStaticPaths, InferGetStaticPropsType } from "next";
import hydrate from "next-mdx-remote/hydrate";
import Meta from "../../components/meta";
import { APP_STORE_URL, TWITTER_URL } from "../../constants";
import Apple from "../../icons/apple";
import Twitter from "../../icons/twitter";
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
        image={`https://soapbox.social${meta.thumb}`}
        twitterCardType="summary_large_image"
      />

      <div className="max-w-2xl w-full mx-auto p-5 md:p-10 bg-white rounded-room">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold leading-none text-prose-primary">
            {meta.title}
          </h1>

          <p className="text-prose-secondary">
            <strong>
              <time dateTime={dayjs(meta.date).format()}>
                {dayjs(meta.date).format("MMMM D, YYYY")}
              </time>
            </strong>
          </p>

          {hasAuthors && (
            <div className="flex -space-x-2">
              {meta.authors.map((member, i: number) => (
                <div key={i} className="flex room-head overflow-visible">
                  <img
                    alt={member.displayName}
                    className="h-10 w-10 room-head object-cover object-center rounded-full"
                    draggable="false"
                    height={40}
                    src={member.image}
                    width={40}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="h-8" />

        <div className="prose max-w-none">{content}</div>
      </div>

      <div className="h-4" />

      <div className="max-w-2xl w-full mx-auto p-5 md:p-10 bg-white rounded-room">
        <div className="text-center text-prose-secondary">
          <p className="text-4xl font-extrabold leading-none text-prose-primary">
            Join Soapbox
          </p>

          <div className="h-4" />

          <p>Download Soapbox on iOS and follow us on Twitter.</p>

          <div className="h-8" />

          <div className="max-w-md mx-auto sm:flex justify-center sm:space-x-2 space-y-4 sm:space-y-0">
            <a
              className="py-2 px-4 bg-brand text-white rounded-full flex justify-center items-center space-x-2 focus:outline-none focus:ring-4"
              href={APP_STORE_URL}
              aria-label="Download on the App Store"
            >
              <Apple size={24} className="-mt-0.5" />
              <span className="text-lg font-medium">App Store</span>
            </a>

            <a
              className="py-2 px-4 bg-brand text-white rounded-full flex justify-center items-center space-x-2 focus:outline-none focus:ring-4"
              href={TWITTER_URL}
              aria-label="Download on the App Store"
            >
              <Twitter size={24} />
              <span className="text-lg font-medium">Twitter</span>
            </a>
          </div>
        </div>
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
