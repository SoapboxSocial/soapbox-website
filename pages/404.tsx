import Meta from "../components/meta";

export default function Custom404Page() {
  return (
    <main className="flex-1 w-full p-5">
      <Meta title="404: This page could not be found" />

      <div className="max-w-lg mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none text-prose-primary">
            Sorry about that
          </h1>

          <div className="h-2" />

          <p className="text-prose-secondary">This page could not be found</p>
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
