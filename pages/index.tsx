import Image from "next/image";
import Link from "next/link";
import AppStoreButton from "../components/app-store-button";
import Meta from "../components/meta";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-2.5 sm:p-5 grid lg:grid-cols-2 gap-2.5 sm:gap-5">
      <Meta />

      <div className="bg-white rounded-room relative overflow-hidden lg:col-span-2">
        <div className="pt-10 px-10">
          {" "}
          <div className="grid lg:grid-cols-2 gap-8 relative">
            <div className="text-center lg:text-left">
              <img
                alt="Soapbox"
                className="soapbox-mark mx-auto lg:mx-0"
                draggable={false}
                loading="eager"
                src="/brand.png"
              />

              <Link href="/blog">
                <a className="hidden lg:inline absolute top-0 right-0 text-gray-700">
                  Blog
                </a>
              </Link>

              {/* Spacer */}
              <div className="h-8" />

              <h1 className="text-4xl font-bold">Soapbox</h1>

              {/* Spacer */}
              <div className="h-4" />

              <p className="max-w-xs mx-auto lg:mx-0 text-xl text-gray-700">
                A drop-in audio chat app to have casual conversations with
                strangers and friends.
              </p>

              {/* Spacer */}
              <div className="h-16" />

              <div className="flex justify-center">
                <div className="relative inline-block mx-auto">
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
                    className="absolute -left-36 -top-10 transform-gpu -rotate-12 w-32"
                    src="/green-dude.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:pt-12">
              <div className="w-8/12 sm:w-auto flex">
                <Image
                  alt="Soapbox App"
                  draggable={false}
                  height={534}
                  objectFit="contain"
                  priority
                  src="/screenshot.png"
                  width={360}
                />
              </div>
            </div>
          </div>
        </div>

        <img
          alt=""
          aria-hidden
          className="absolute -right-4 md:right-8 -bottom-4 md:bottom-8 transform-gpu -rotate-12 w-32"
          draggable={false}
          src="/pink-dude.png"
        />
      </div>

      <div className="bg-white rounded-room">
        <div className="p-10">
          <div className="max-w-xs mx-auto text-center">
            <h2 className="text-3xl font-bold">Share Something Cool</h2>

            {/* Spacer */}
            <div className="h-2" />

            <p className="text-lg text-gray-700">
              Share links, videos, and more in rooms to keep the conversation
              going.
            </p>
          </div>

          {/* Spacer */}
          <div className="h-8" />

          <div className="flex justify-center">
            <Image
              alt="Link Sharing"
              draggable={false}
              height={400}
              objectFit="contain"
              src="/link-share.png"
              width={375}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-room relative overflow-hidden">
        <div className="-mt-4 h-72 relative">
          <Image
            alt="Stories"
            draggable={false}
            layout="fill"
            objectFit="cover"
            src="/story-heads.png"
          />
        </div>

        <div className="p-10">
          <div className="max-w-xs mx-auto text-center">
            <h2 className="text-3xl font-bold">Connect Any Time</h2>

            {/* Spacer */}
            <div className="h-2" />

            <p className="text-lg text-gray-700">
              Want to let your friends know how you're doing? Post a voice
              story.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
