import Page from "../components/page";
import Meta from "../components/meta";

export default function LoginPinPage() {
  return (
    <Page>
      <Meta />

      <main className="main">
        <h1>
          Logging you in...{" "}
          <span role="img" aria-label="Soap">
            🧼
          </span>
        </h1>
      </main>
    </Page>
  );
}
