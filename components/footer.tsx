import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto w-full p-6">
      <ul className="flex flex-wrap justify-center -mr-4 -mb-2 text-sm text-black opacity-25">
        <li className="mr-4 mb-2">
          <a href="https://twitter.com/joinsoapbox">Twitter</a>
        </li>

        <li className="mr-4 mb-2">
          <a href="https://www.notion.so/Media-Kit-f122893891b84cb5a19a8744b770f847">
            Media Kit
          </a>
        </li>

        <li className="mr-4 mb-2">
          <Link href="/support">
            <a>Support</a>
          </Link>
        </li>

        <li className="mr-4 mb-2">
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>

        <li className="mr-4 mb-2">
          <Link href="/terms">
            <a>Terms</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
