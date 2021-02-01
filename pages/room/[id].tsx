import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Fragment } from "react";
import Meta from "../../components/meta";
import RoomPreview from "../../components/room-preview";
import { APP_ID, APP_NAME } from "../../constants";

export default function RoomPage({
  room,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const APP_LINK = `soapbox://room/${room.id}`;

  return (
    <main className="main">
      <Meta
        appleItunesApp={`app-id=${APP_ID}, app-argument: ${APP_LINK}`}
        title={`Soapbox: Join ${room.name}`}
        url={`https://soapbox.social/room/${room.id}`}
        extra={
          <Fragment>
            <meta name="robots" content="noindex" />

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

      <RoomPreview
        buttonText="Join in"
        buttonLink={APP_LINK}
        roomName={room.name}
        roomMembers={room.members}
      />
    </main>
  );
}

type Member = {
  displayName: string;
  id: number;
  image: string;
  muted: boolean;
  role: string;
  ssrc: number;
};

type Group = {
  id: number;
  image: string;
  name: string;
};

type Data = {
  name: string;
  group?: Group;
  id: number;
  members: Member[];
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const ENDPOINT = `https://metadata.soapbox.social/rooms/${params.id}`;

  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const data: Data = await res.json();

  const room = {
    ...data,
    members: data.members
      .sort((a, b) => a.id - b.id)
      .map((member) => ({
        ...member,
        image: `https://cdn.soapbox.social/images/${member.image}`,
      })),
  };

  return {
    props: {
      room,
    },
  };
};
