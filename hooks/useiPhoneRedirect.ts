import { useRouter } from "next/router";
import { useEffect } from "react";
import { APP_STORE_URL } from "../constants";

export default function useiPhoneRedirect(
  redirectIfFalse?: boolean,
  redirectIfFalsePath?: string
) {
  const router = useRouter();

  useEffect(() => {
    if (/iPhone/i.test(navigator.userAgent)) {
      window.location.href = APP_STORE_URL;
    }

    if (typeof redirectIfFalsePath === "string" && redirectIfFalse) {
      router.replace(redirectIfFalsePath);
    }
  }, [redirectIfFalse, redirectIfFalsePath]);
}
