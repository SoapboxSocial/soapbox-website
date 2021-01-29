import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const { pathname } = useRouter();

  const isNavigable = !pathname.includes("/report");

  const shouldHideNavigation = pathname === "/";

  const icon = (
    <img
      className="brand-mark"
      src="/brand.png"
      alt="Soapbox"
      loading="eager"
    />
  );

  if (shouldHideNavigation) return null;

  return (
    <header className="mt-5">
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
