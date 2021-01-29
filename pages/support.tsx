import Meta from "../components/meta";
import { CONTACT_URL } from "../constants";

export default function SupportPage() {
  return (
    <main className="p-5">
      <Meta title="Support" url="https://soapbox.social/support" />

      <div className="max-w-2xl w-full mx-auto p-5 md:p-10 bg-white rounded-room text-center">
        <div className="prose max-w-none">
          <h1>Support</h1>

          <p>Get help from the Soapbox Team.</p>
        </div>

        <div className="h-8" />

        <a
          className="py-4 px-8 bg-brand text-white rounded-full inline-flex justify-center items-center space-x-3 focus:outline-none focus:ring-4"
          href={CONTACT_URL}
        >
          <span className="text-2xl font-medium">Contact us</span>
        </a>
      </div>
    </main>
  );
}
