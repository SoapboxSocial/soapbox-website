import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex">
      <a className="twitter" href="https://twitter.com/joinsoapbox">
        <img src="/twitter.svg" alt="Twitter" />
      </a>

      <div className="flex space-x-4">
        <p>
          <a href="https://www.notion.so/Media-Kit-f122893891b84cb5a19a8744b770f847">
            Media Kit
          </a>
        </p>

        <p>
          <Link href="/support">
            <a>Support</a>
          </Link>
        </p>

        <p>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </p>

        <p>
          <Link href="/terms">
            <a>Terms</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}
