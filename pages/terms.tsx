import Meta from "../components/meta";
import Page from "../components/page";
import EndUserLicenseAgreement from "../legal/eula.mdx";

export default function TermsPage() {
  return (
    <Page>
      <Meta title="Mobile Application End User License Agreement" />

      <main className="main is-wide">
        <div className="legal">
          <EndUserLicenseAgreement />
        </div>
      </main>
    </Page>
  );
}
