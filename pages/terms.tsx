import Meta from "../components/meta";
import EndUserLicenseAgreement from "../legal/eula.mdx";

export default function TermsPage() {
  return (
    <main className="main is-wide">
      <Meta title="Terms & Conditions" url="https://soapbox.social/terms" />

      <div className="legal">
        <EndUserLicenseAgreement />
      </div>
    </main>
  );
}
