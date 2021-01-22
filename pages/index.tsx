import Meta from "../components/meta";
import { APP_STORE_URL } from "../constants";
import Apple from "../icons/apple";
import Image from "next/image";

function AppStoreButton() {
  return (
    <a
      className="py-4 px-6 bg-brand text-white rounded-full inline-flex justify-center items-center space-x-3 focus:outline-none focus:ring-4 transition-transform transform-gpu hover:scale-105"
      href={APP_STORE_URL}
      aria-label="Download on the App Store"
    >
      <Apple size={32} className="-mt-0.5" />
      <span className="text-2xl font-medium">App Store</span>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 p-5">
      <Meta />

      <div
        className="pt-5 md:pt-10 px-5 md:px-10 bg-white overflow-hidden text-center relative rounded-3xl"
        style={{ borderRadius: 30 }}
      >
        <img
          draggable={false}
          className="brand-mark mx-auto"
          src="/brand.png"
          alt="Soapbox"
          loading="eager"
        />

        {/* Spacer */}
        <div className="h-8" />

        <h1 className="text-3xl font-bold">Soapbox</h1>

        {/* Spacer */}
        <div className="h-8" />

        <p className="text-xl max-w-md mx-auto">
          A drop-in audio chat app to have casual conversations with strangers
          and friends.
        </p>

        {/* Spacer */}
        <div className="h-16" />

        <div className="relative inline-flex mx-auto">
          <AppStoreButton />

          <img
            draggable={false}
            aria-hidden
            className="absolute w-40 -right-44 top-4 transform-gpu -rotate-12"
            src="/cyan-dude.png"
            alt=""
          />

          <img
            draggable={false}
            aria-hidden
            className="absolute -left-40 -top-10 transform-gpu -rotate-12 w-32"
            src="/green-dude.png"
            alt=""
          />
        </div>

        {/* Spacer */}
        <div className="h-16" />

        <div className="flex justify-center">
          <Image
            src="/screenshot.png"
            width={390}
            height={576}
            priority
            objectFit="cover"
            objectPosition="top"
            className="align-middle"
            alt=""
          />
        </div>

        <img
          draggable={false}
          aria-hidden
          className="absolute -left-4 md:left-8 -bottom-4 md:bottom-8 transform-gpu -rotate-12 w-32"
          src="/pink-dude.png"
          alt=""
        />
      </div>
    </main>
  );
}
