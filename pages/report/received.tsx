import Meta from "../../components/meta";

export default function ReceivedPage() {
  return (
    <main className="p-5">
      <Meta
        title="Thank you"
        extra={<meta name="robots" content="noindex" />}
        url="https://soapbox.social/report/received"
      />

      <div className="max-w-3xl w-full mx-auto px-5 md:px-10 py-24 md:py-32 bg-white rounded-room text-center">
        <div className="prose max-w-none">
          <h1>Received. Thank you</h1>
        </div>
      </div>
    </main>
  );
}
