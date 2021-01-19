import Link from "next/link";

export default function Header({ isNavigable = true }) {
  return (
    <header className="mt-8">
      <nav className="flex justify-center">
        {isNavigable ? (
          <Link href="/">
            <a>
              <img className="brand-mark" src="/brand.png" alt="Soapbox" />
            </a>
          </Link>
        ) : (
          <img className="brand-mark" src="/brand.png" alt="Soapbox" />
        )}
      </nav>
    </header>
  );
}
