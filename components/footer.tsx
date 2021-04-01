import Link from "next/link";
import { MEDIA_KIT_URL, TWITTER_URL } from "../constants";

export default function Footer() {
  return (
    <footer className="lg:text-sm px-5 pb-5">
      <ul className="w-full flex flex-wrap justify-center -mr-4 -mb-2">
        <li className="footer-item">
          <a className="footer-item-link" href={TWITTER_URL}>
            Twitter
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-item-link" href={MEDIA_KIT_URL}>
            Media Kit
          </a>
        </li>
        <li className="footer-item">
          <Link href="/blog">
            <a className="footer-item-link">Blog</a>
          </Link>
        </li>
        <li className="footer-item">
          <Link href="/support">
            <a className="footer-item-link">Support</a>
          </Link>
        </li>
        <li className="footer-item">
          <Link href="/privacy">
            <a className="footer-item-link">Privacy</a>
          </Link>
        </li>
        <li className="footer-item">
          <Link href="/terms">
            <a className="footer-item-link">Terms</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
