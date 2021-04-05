import Meta from "../components/meta";
import { CONTACT_URL } from "../constants";

export default function SupportPage() {
  return (
    <main className="flex-1 w-full p-5">
      <Meta title="Support" url="https://soapbox.social/support" />

      <div className="max-w-lg mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none text-prose-primary">
            Support
          </h1>

          <div className="h-2" />

          <p className="text-prose-secondary">
            Get help from the Soapbox team.
          </p>

          <div className="h-8" />

          <a
            className="py-4 px-8 bg-soapbox text-white rounded-full inline-flex justify-center items-center space-x-3 focus:outline-none focus:ring-4"
            href={CONTACT_URL}
          >
            <span className="text-2xl font-medium">Contact us</span>
          </a>
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
