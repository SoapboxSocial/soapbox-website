import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import RoomPreview from "../../components/room-preview";
import { getAllPostsWithData } from "../../lib";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ posts }: Props) {
  return (
    <main className="flex-1 p-5">
      <div className="max-w-sm mx-auto">
        <div className="prose">
          <h1>Our Soapbox</h1>
        </div>

        <div className="h-5" />

        <ul>
          {posts?.map(({ slug, meta }, i) => (
            <li key={i}>
              <Link href={`/blog/${slug}`}>
                <a>
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
