import Meta from "../components/meta";

export default function LoginPinPage() {
  return (
    <main className="main">
      <Meta extra={<meta name="robots" content="noindex" />} />

      <h1>
        Logging you in...{" "}
        <span role="img" aria-label="Soap">
          🧼
        </span>
      </h1>
    </main>
  );
}
