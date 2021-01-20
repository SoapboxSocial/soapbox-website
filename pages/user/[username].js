import Head from "next/head";
import Page from "../../components/page";

export default function UserPage({ profile }) {
  return (
    <Page>
      <Head>
        <title>Soapbox: Follow @{profile.username}</title>
      </Head>

      <main className="main">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <img
              alt={profile.display_name}
              src={`https://cdn.soapbox.social/images/${profile.image}`}
              className="rounded-full h-24 w-24 mx-auto"
              draggable="false"
            />

            <div>
              <h1 className="text-2xl leading-tight font-bold">
                {profile.display_name}
              </h1>

              <p className="text-md text-black opacity-50">
                @{profile.username}
              </p>
            </div>

            {profile.bio && <p>{profile.bio}</p>}
          </div>

          {/* <div className="text-center">
            <a
              href="#!"
              className="inline-flex px-6 py-2 text-xl font-medium rounded-full bg-brand text-white"
            >
              Follow
            </a>
          </div> */}
        </div>
      </main>
    </Page>
  );
}

export async function getServerSideProps({ params }) {
  const ENDPOINT = `https://metadata.soapbox.social/users/${params.username}`;

  const res = await fetch(ENDPOINT);

  const profile = await res.json();

  if (!profile) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      profile,
    },
  };
}
