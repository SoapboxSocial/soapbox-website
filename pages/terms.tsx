import Meta from "../components/meta";
import EndUserLicenseAgreement from "../legal/eula.mdx";

export default function TermsPage() {
  return (
    <main className="p-5">
      <Meta title="Terms & Conditions" url="https://soapbox.social/terms" />

      <div className="max-w-5xl w-full mx-auto p-5 md:p-10 bg-white rounded-room">
        <div className="prose max-w-none">
          <EndUserLicenseAgreement />
        </div>
      </div>
    </main>
  );
}
