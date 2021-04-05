import Meta from "../components/meta";
import EndUserLicenseAgreement from "../legal/eula.mdx";

export default function TermsPage() {
  return (
    <main className="flex-1 w-full p-5">
      <Meta title="Terms & Conditions" url="https://soapbox.social/terms" />

      <div className="max-w-lg mx-auto">
        <div className="prose max-w-none">
          <EndUserLicenseAgreement />
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
