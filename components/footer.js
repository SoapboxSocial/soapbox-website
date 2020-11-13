import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex">
      <a className="twitter" href="https://twitter.com/joinsoapbox">
        <img src="/twitter.svg" alt="Twitter" />
      </a>

      <div className="flex space-x-4">
        <p>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </p>

        <p>
          <Link href="/eula">
            <a>EULA</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}
