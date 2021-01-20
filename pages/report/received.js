import Meta from "../../components/meta";

export default function ReceivedPage() {
  return (
    <main className="main">
      <Meta
        title="Thank you"
        extra={<meta name="robots" content="noindex" />}
      />

      <p>Thank you, we've received your report.</p>
    </main>
  );
}
