import Meta from "../components/meta";
import Page from "../components/page";

export default function Custom404Page() {
  return (
    <Page>
      <Meta title="404: This page could not be found" />

      <main className="main">
        <h1>This page could not be found.</h1>
      </main>
    </Page>
  );
}
