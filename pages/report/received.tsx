import Meta from "../../components/meta";

export default function ReceivedPage() {
  return (
    <main className="flex-1 w-full p-5">
      <Meta
        title="Thank you"
        extra={<meta name="robots" content="noindex" />}
        url="https://soapbox.social/report/received"
      />

      <div className="max-w-lg mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none text-prose-primary">
            Received. Thank you
          </h1>

          <div className="h-2" />

          <p className="text-prose-secondary">
            We'll reach out as soon as we've processed your incident.
          </p>
        </div>
      </div>

      <style jsx global>{`
        body {
          background-color: #fff;
        }
      `}</style>
    </main>
  );
}
