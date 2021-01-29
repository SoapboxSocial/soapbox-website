import Meta from "../components/meta";

export default function Custom404Page() {
  return (
    <main className="p-5">
      <Meta title="404: This page could not be found" />

      <div className="max-w-3xl w-full mx-auto px-5 md:px-10 py-24 md:py-32 bg-white rounded-room text-center">
        <div className="prose max-w-none">
          <h1>This page could not be found</h1>
        </div>
      </div>
    </main>
  );
}
