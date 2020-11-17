import Head from "next/head";
import EndUserLicenseAgreement from "../legal/eula.mdx";

export default function EULA() {
  return (
    <main className="main is-wide">
      <Head>
        <title>Mobile Application End User License Agreement</title>
      </Head>

      <div className="legal">
        <EndUserLicenseAgreement />
      </div>
    </main>
  );
}
