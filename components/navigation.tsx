import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  const isNavigable = !router.pathname.includes("/report");

  const isHome = router.pathname === "/";

  const icon = (
    <img
      className="brand-mark"
      src="/brand.png"
      alt="Soapbox"
      loading="eager"
    />
  );

  if (isHome) return null;

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
