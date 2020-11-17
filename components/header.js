import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav className="flex justify-center">
        <Link href="/">
          <a>
            <img className="brand-mark" src="/brand.png" alt="Soapbox" />
          </a>
        </Link>
      </nav>
    </header>
  );
}
