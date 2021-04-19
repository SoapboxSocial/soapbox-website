import { GetServerSideProps } from "next";
import { Fragment, useMemo } from "react";
import Meta from "../../components/meta";
import RoomPreview from "../../components/room-preview";
import { APP_ID, APP_NAME } from "../../constants";
import { Room } from "../../types/shared";

type Props = {
  room: Room;
};

export default function RoomPage({ room }: Props) {
  const APP_LINK = `soapbox://room/${room.id}`;

  const memberNames = room.members.map((_member) => _member?.display_name);

  const roomMembers = useMemo(() => {
    if (memberNames.length >= 3)
      return `${memberNames[0]}, ${memberNames[1]} and ${memberNames[2]}`;

    if (memberNames.length === 2)
      return `${memberNames[0]} and ${memberNames[1]}`;

    return memberNames[0];
  }, [memberNames]);

  return (
    <main className="flex-1 w-full py-20 px-5">
      <Meta
        appleItunesApp={`app-id=${APP_ID}, app-argument: ${APP_LINK}`}
        title={`Join ${room?.name ? `"${room.name}" with` : ""} ${roomMembers}`}
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

      <div className="w-full mx-auto" style={{ maxWidth: 428 }}>
        <RoomPreview
          buttonLink={APP_LINK}
          roomName={room.name}
          roomMembers={room.members}
        />
      </div>
    </main>
  );
}

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

  const data: Room = await res.json();

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
