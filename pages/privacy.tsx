import Meta from "../components/meta";
import PrivacyPolicy from "../legal/privacy.mdx";

export default function PrivacyPage() {
  return (
    <main className="p-5">
      <Meta title="Privacy Policy" url="https://soapbox.social/privacy" />

      <div className="max-w-5xl w-full mx-auto p-5 md:p-10 bg-white rounded-room">
        <div className="prose max-w-none">
          <PrivacyPolicy />
        </div>
      </div>
    </main>
  );
}
