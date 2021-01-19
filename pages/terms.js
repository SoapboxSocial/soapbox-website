import Head from "next/head";
import Page from "../components/page";
import EndUserLicenseAgreement from "../legal/eula.mdx";

export default function TermsPage() {
  return (
    <Page>
      <main className="main is-wide">
        <Head>
          <title>Mobile Application End User License Agreement</title>
        </Head>

        <div className="legal">
          <EndUserLicenseAgreement />
        </div>
      </main>
    </Page>
  );
}
