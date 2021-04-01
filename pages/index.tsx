import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import AppStoreButton from "../components/app-store-button";
import Meta from "../components/meta";

export default function HomePage() {
  return (
    <Fragment>
      <Meta />

      <header className="max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto w-full">
        <nav className="px-8 py-5">
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
                <a className="text-white lg:text-sm">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto flex-1">
        <div className="px-8 pb-8 grid lg:grid-cols-2 gap-8">
          <div className="text-center lg:text-left pt-16">
            <h1 className="text-4xl font-bold text-white">
              Soapbox, Not Just a Conversation
            </h1>

            {/* Spacer */}
            <div className="h-8" />

            <p className="text-xl text-gray-200">
              A drop-in audio chat app to have casual conversations with
              strangers and friends with games, videos, and more.
            </p>

            {/* Spacer */}
            <div className="h-8" />

            <AppStoreButton />
          </div>

          <div className="place-self-center">
            <div className="inline-flex relative m-8">
              <div className="overflow-visible-next-image">
                <Image
                  alt="Soapbox App"
                  draggable={false}
                  height={866 * 0.72}
                  objectFit="cover"
                  quality={100}
                  priority
                  loading="eager"
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
          </div>
        </div>{" "}
      </main>

      <style jsx global>{`
        body {
          background: #8359fe;
          color: #fff;
        }

        .overflow-visible-next-image div {
          overflow: visible !important;
        }
      `}</style>
    </Fragment>
  );
}
