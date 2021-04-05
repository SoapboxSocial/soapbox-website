import Meta from "../components/meta";

export default function LoginPinPage() {
  return (
    <main className="flex-1 w-full p-5">
      <Meta extra={<meta name="robots" content="noindex" />} />

      <div className="max-w-lg mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none text-prose-primary">
            Logging you in
          </h1>
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
