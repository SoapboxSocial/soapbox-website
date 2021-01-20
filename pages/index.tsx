import Meta from "../components/meta";
import Page from "../components/page";
import Room from "../components/room";
import { APP_STORE_URL } from "../constants";
import Apple from "../icons/apple";

export default function HomePage() {
  return (
    <Page>
      <Meta />

      <main className="main">
        <Room roomName="Soapbox" buttonText="Join in" />

        <p className="summary">
          A drop-in audio chat app to have casual conversations with strangers
          and friends.
        </p>

        <a
          className="py-4 px-6 bg-brand text-white rounded-full inline-flex items-center space-x-4"
          href={APP_STORE_URL}
          aria-label="Download on the App Store"
        >
          <Apple size={32} className="-mt-0.5" />
          <span className="text-2xl font-medium">App Store</span>
        </a>
      </main>
    </Page>
  );
}
