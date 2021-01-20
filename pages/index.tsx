import Meta from "../components/meta";
import RoomPreview from "../components/room-preview";
import { APP_STORE_URL } from "../constants";
import Apple from "../icons/apple";

export default function HomePage() {
  return (
    <main className="main">
      <Meta />

      <RoomPreview roomName="Soapbox" buttonText="Join in" />

      <p className="summary">
        A drop-in audio chat app to have casual conversations with strangers and
        friends.
      </p>

      <a
        className="py-4 px-6 bg-brand text-white rounded-full inline-flex items-center space-x-3 focus:outline-none focus:ring-4 transition-transform transform-gpu hover:scale-105"
        href={APP_STORE_URL}
        aria-label="Download on the App Store"
      >
        <Apple size={32} className="-mt-0.5" />
        <span className="text-2xl font-medium">App Store</span>
      </a>
    </main>
  );
}
