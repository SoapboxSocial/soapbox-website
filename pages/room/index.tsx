import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Page from "../../components/page";
import Room from "../../components/room";

export default function RoomPage({
  room,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page>
      <Head>
        <title>Soapbox: Join {room.name}</title>
      </Head>

      <main className="main">
        <Room
          buttonText="Join in"
          roomName={room.name}
          roomMembers={room.members}
        />
      </main>
    </Page>
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
  group: Group;
  id: number;
  members: Member[];
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const ENDPOINT = `https://metadata.soapbox.social/rooms/${query.id}`;

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
