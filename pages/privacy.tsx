import Meta from "../components/meta";
import Page from "../components/page";
import PrivacyPolicy from "../legal/privacy.mdx";

export default function PrivacyPage() {
  return (
    <Page>
      <Meta title="Mobile App Privacy Policy" />

      <main className="main is-wide">
        <div className="legal">
          <PrivacyPolicy />
        </div>
      </main>
    </Page>
  );
}
