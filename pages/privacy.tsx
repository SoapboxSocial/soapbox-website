import Meta from "../components/meta";
import PrivacyPolicy from "../legal/privacy.mdx";

export default function PrivacyPage() {
  return (
    <main className="main is-wide">
      <Meta title="Privacy Policy" />

      <div className="legal">
        <PrivacyPolicy />
      </div>
    </main>
  );
}
