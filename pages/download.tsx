import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import Meta from "../components/meta";
import { APP_STORE_URL } from "../constants";

function DownloadPage() {
  const router = useRouter();

  useEffect(() => {
    if (/iPhone/i.test(navigator.userAgent)) {
      window.location.href = APP_STORE_URL;

      return;
    }

    router.replace("/");
  }, []);

  return (
    <Fragment>
      <Meta title="Download" url="https://soapbox.social/download" />
    </Fragment>
  );
}

export default DownloadPage;
