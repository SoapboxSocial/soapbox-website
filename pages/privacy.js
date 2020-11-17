import Head from "next/head";
import PrivacyPolicy from "../legal/privacy.mdx";

export default function Privacy() {
  return (
    <main className="main is-wide">
      <Head>
        <title>Mobile App Privacy Policy</title>
      </Head>

      <div className="legal">
        <PrivacyPolicy />
      </div>
    </main>
  );
}
