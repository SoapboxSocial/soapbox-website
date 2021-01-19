import Link from "next/link";

export default function Header({ isNavigable = true, isWide = true }) {
  if (isWide) {
    return (
      <header className="mt-8 max-w-2xl mx-auto w-full">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <a>
              <img className="brand-mark" src="/brand.png" alt="Soapbox" />
            </a>
          </Link>

          <a
            href="https://apps.apple.com/us/app/soapbox-talk-with-anyone/id1529283270"
            className="room-button"
          >
            App Store
          </a>
        </nav>
      </header>
    );
  }

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
