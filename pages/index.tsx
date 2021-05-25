import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Instagram, Twitter } from "react-feather";
import AppStoreButton from "../components/app-store-button";
import Meta from "../components/meta";
import { HELLO_URL, INSTAGRAM_URL, TWITTER_URL } from "../constants";
import useiPhoneRedirect from "../hooks/useiPhoneRedirect";

function HomePage() {
  useiPhoneRedirect();

  return (
    <Fragment>
      <Meta />

      <header className="w-full">
        <div className="max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto">
          <nav className="px-8 pt-5">
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
                <ul className="flex items-center space-x-4">
                  <li>
                    <Link href="/blog">
                      <a className="text-white lg:text-sm">Blog</a>
                    </Link>
                  </li>

                  <li className="hidden sm:block">
                    <a href={HELLO_URL} className="text-white lg:text-sm">
                      Contact
                    </a>
                  </li>

                  <li>
                    <a href={INSTAGRAM_URL} className="text-white lg:text-sm">
                      <Instagram />
                    </a>
                  </li>

                  <li>
                    <a href={TWITTER_URL} className="text-white lg:text-sm">
                      <Twitter />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full overflow-hidden">
        <div className="max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="px-8 grid lg:grid-cols-2 gap-8">
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
              <div className="inline-flex mt-4 mb-2 relative">
                <div className="overflow-visible-next-image">
                  <Image
                    alt="Soapbox App"
                    draggable={false}
                    height={866 * 0.7}
                    objectFit="cover"
                    quality={100}
                    priority
                    loading="eager"
                    className="transform-gpu -rotate-12"
                    src="/device-screenshot-home.png"
                    width={428 * 0.7}
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
          </div>
        </div>
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

export default HomePage;
