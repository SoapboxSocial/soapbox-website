import { Fragment } from "react";
import Meta from "../components/meta";
import useiPhoneRedirect from "../hooks/useiPhoneRedirect";

function DownloadPage() {
  useiPhoneRedirect(true, "/");

  return (
    <Fragment>
      <Meta title="Download" url="https://soapbox.social/download" />

      <main className="flex-1" />
    </Fragment>
  );
}

export default DownloadPage;
