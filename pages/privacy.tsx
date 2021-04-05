import Meta from "../components/meta";
import PrivacyPolicy from "../legal/privacy.mdx";

export default function PrivacyPage() {
  return (
    <main className="flex-1 w-full p-5">
      <Meta title="Privacy Policy" url="https://soapbox.social/privacy" />

      <div className="max-w-lg mx-auto">
        <div className="prose max-w-none">
          <PrivacyPolicy />
        </div>
      </div>

      <style jsx global>{`
        body {
          background-color: #fff;
        }
      `}</style>
    </main>
  );
}
