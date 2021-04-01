import { trackGoal } from "fathom-client";
import type { MouseEvent } from "react";
import { APP_STORE_URL, FATHOM_EVENTS } from "../constants";
import Apple from "../icons/apple";

export default function AppStoreButton() {
  const handleOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    trackGoal(FATHOM_EVENTS["Clicked AppStore Link (Home)"], 0);

    window.location.href = e.currentTarget.href;
  };

  return (
    <a
      className="inline-flex focus:outline-none focus:ring-4 rounded-xl"
      href={APP_STORE_URL}
      aria-label="Download on the App Store"
      onClick={handleOnClick}
    >
      <img className="h-16" src="/app-store-badge.svg" />
    </a>
  );
}
