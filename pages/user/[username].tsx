import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Meta from "../../components/meta";
import { APP_ID, APP_NAME } from "../../constants";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function UserPage({ profile }: Props) {
  const APP_LINK = `soapbox://user/${profile.username}`;

  const IMAGE = `https://cdn.soapbox.social/images/${profile.image}`;

  return (
    <main className="py-20 px-5">
      <Meta
        appleItunesApp={`app-id=${APP_ID}, app-argument: ${APP_LINK}`}
        title={`Soapbox: Follow @${profile.username}`}
        description={`Follow @${profile.username} and get notified when they start a room on Soapbox.`}
        image={IMAGE}
        url={`https://soapbox.social/user/${profile.username}`}
        extra={
          <Fragment>
            {/* Facebook */}
            <meta property="al:ios:app_store_id" content={APP_ID} />
            <meta property="al:ios:app_name" content={APP_NAME} />
            <meta property="al:ios:url" content={APP_LINK} />

            {/* Twitter */}
            <meta name="twitter:app:name:iphone" content={APP_NAME} />
            <meta name="twitter:app:id:iphone" content={APP_ID} />
            <meta name="twitter:app:url:iphone" content={APP_LINK} />
            <meta name="twitter:app:name:ipad" content={APP_NAME} />
            <meta name="twitter:app:id:ipad" content={APP_ID} />
            <meta name="twitter:app:url:ipad" content={APP_LINK} />
          </Fragment>
        }
      />

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Image
            key={profile.display_name}
            alt={profile.display_name}
            src={IMAGE}
            className="rounded-full h-24 w-24 mx-auto"
            width={96}
            height={96}
            draggable="false"
            priority
            loading="eager"
          />

          <div>
            <h1 className="text-2xl leading-tight font-bold">
              {profile.display_name}
            </h1>

            <p className="text-md text-black opacity-50">@{profile.username}</p>
          </div>

          {profile.bio && <p>{profile.bio}</p>}
        </div>

        <div className="text-center">
          <a
            href={APP_LINK}
            className="inline-flex px-6 py-2 text-xl font-medium rounded-full bg-soapbox text-white"
          >
            Follow
          </a>
        </div>
      </div>
    </main>
  );
}

type Data = {
  bio: string;
  display_name: string;
  id: number;
  image: string;
  username: string;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const ENDPOINT = `https://metadata.soapbox.social/users/${params.username}`;

  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const profile: Data = await res.json();

  return {
    props: {
      profile,
    },
  };
};
