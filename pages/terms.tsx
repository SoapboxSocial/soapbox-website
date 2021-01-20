import Meta from "../components/meta";
import EndUserLicenseAgreement from "../legal/eula.mdx";

export default function TermsPage() {
  return (
    <main className="main is-wide">
      <Meta title="Terms & Conditions" />

      <div className="legal">
        <EndUserLicenseAgreement />
      </div>
    </main>
  );
}
