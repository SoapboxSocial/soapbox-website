import Head from "next/head";
import Page from "../components/page";
import PrivacyPolicy from "../legal/privacy.mdx";

export default function PrivacyPage() {
  return (
    <Page>
      <main className="main is-wide">
        <Head>
          <title>Mobile App Privacy Policy</title>
        </Head>

        <div className="legal">
          <PrivacyPolicy />
        </div>
      </main>
    </Page>
  );
}
