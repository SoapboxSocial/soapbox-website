import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import AppStoreButton from "../components/app-store-button";
import Meta from "../components/meta";

export default function HomePage() {
  return (
    <Fragment>
      <Meta />

      <header className="max-w-4xl mx-auto w-full">
        <nav className="py-5">
          <ul className="flex justify-between items-center w-full">
            <li>
              <img
                alt="Soapbox"
                className="w-16 h-16"
                draggable={false}
                loading="eager"
                src="/brand.png"
              />
            </li>

            <li>
              <Link href="/blog">
                <a className="text-gray-200 text-sm">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-2 gap-8 flex-1">
        <div className="text-center lg:text-left pt-16">
          <h1 className="text-4xl font-bold text-white">
            Soapbox, a Space to Chat
          </h1>

          {/* Spacer */}
          <div className="h-8" />

          <p className="text-xl text-gray-200">
            A drop-in audio chat app to have casual conversations with strangers
            and friends with games, videos, and more.
          </p>

          {/* Spacer */}
          <div className="h-8" />

          <AppStoreButton />
        </div>

        <div className="relative place-self-center">
          <div className="overflow-visible-next-image">
            <Image
              alt="Soapbox App"
              draggable={false}
              height={866 * 0.72}
              objectFit="cover"
              priority
              className="transform-gpu -rotate-12"
              src="/device-screenshot-home.png"
              width={428 * 0.72}
            />
          </div>

          <img
            alt=""
            aria-hidden
            className="absolute w-40 -right-40 bottom-0 transform-gpu -rotate-12"
            draggable={false}
            src="/cyan-dude.png"
          />

          <img
            alt=""
            aria-hidden
            className="absolute w-32 -right-16 top-0 transform-gpu -rotate-12"
            draggable={false}
            src="/green-dude.png"
            style={{
              // @ts-ignore
              "--tw-scale-x": "-1",
            }}
          />

          <img
            alt=""
            aria-hidden
            className="absolute w-32 -left-16 top-64 transform-gpu rotate-12"
            draggable={false}
            src="/pink-dude.png"
          />
        </div>
      </main>

      <style jsx global>{`
        body {
          background: linear-gradient(140deg, #8359fe 0%, #4308c3 100%);
        }

        .overflow-visible-next-image div {
          overflow: visible !important;
        }
      `}</style>
    </Fragment>
  );
}
