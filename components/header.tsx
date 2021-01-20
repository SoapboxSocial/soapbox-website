import Link from "next/link";

export default function Header({
  isNavigable = true,
}: {
  isNavigable?: boolean;
}) {
  const icon = (
    <img
      className="brand-mark"
      src="/brand.png"
      alt="Soapbox"
      loading="eager"
    />
  );

  return (
    <header className="mt-8">
      <nav className="flex justify-center">
        {isNavigable ? (
          <Link href="/">
            <a className="focus:outline-none focus:ring-4 rounded">{icon}</a>
          </Link>
        ) : (
          icon
        )}
      </nav>
    </header>
  );
}
