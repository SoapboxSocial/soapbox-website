import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto w-full p-6">
      <ul className="flex flex-wrap justify-center -mr-4 -mb-2 text-sm ">
        <li className="mr-4 mb-2">
          <a
            className="text-black opacity-25 focus:outline-none focus:opacity-75 hover:opacity-75"
            href="https://twitter.com/intent/user?screen_name=joinsoapbox"
          >
            Twitter
          </a>
        </li>

        <li className="mr-4 mb-2">
          <a
            className="text-black opacity-25 focus:outline-none focus:opacity-75 hover:opacity-75"
            href="https://www.notion.so/Media-Kit-f122893891b84cb5a19a8744b770f847"
          >
            Media Kit
          </a>
        </li>

        <li className="mr-4 mb-2">
          <Link href="/support">
            <a className="text-black opacity-25 focus:outline-none focus:opacity-75 hover:opacity-75">
              Support
            </a>
          </Link>
        </li>

        <li className="mr-4 mb-2">
          <Link href="/privacy">
            <a className="text-black opacity-25 focus:outline-none focus:opacity-75 hover:opacity-75">
              Privacy
            </a>
          </Link>
        </li>

        <li className="mr-4 mb-2">
          <Link href="/terms">
            <a className="text-black opacity-25 focus:outline-none focus:opacity-75 hover:opacity-75">
              Terms
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
