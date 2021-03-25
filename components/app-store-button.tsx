import { trackGoal } from "fathom-client";
import type { MouseEvent } from "react";
import { APP_STORE_URL } from "../constants";
import Apple from "../icons/apple";

export default function AppStoreButton() {
  const handleOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    trackGoal("NUSYSEKO", 0);

    window.location.href = e.currentTarget.href;
  };

  return (
    <a
      className="py-4 px-6 bg-soapbox text-white rounded-full inline-flex justify-center items-center space-x-3 focus:outline-none focus:ring-4"
      href={APP_STORE_URL}
      aria-label="Download on the App Store"
      onClick={handleOnClick}
    >
      <Apple size={32} className="-mt-0.5" />
      <span className="text-2xl font-medium">App Store</span>
    </a>
  );
}
