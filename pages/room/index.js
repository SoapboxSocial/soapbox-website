import Head from "next/head";
import Page from "../../components/page";
import Room from "../../components/room";

export default function RoomPage({ room }) {
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

export async function getServerSideProps({ query }) {
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

  const data = await res.json();

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
}
