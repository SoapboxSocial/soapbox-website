import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import Meta from "../../components/meta";

type FormValues = {
  userId?: string;
  reportedUserId?: string;
  reportedGroupId?: string;
  email: string;
  name: string;
  what: string;
  subject: string;
  details: string;
  reportIsCorrect: boolean;
};

export default function IncidentPage() {
  const { query } = useRouter();

  const userId = query.userId;
  const reportedUserId = query.reportedUserId;
  const reportedGroupId = query.reportedGroupId;

  const { register, handleSubmit, formState } = useForm<FormValues>();

  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await fetch("/api/report/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      window.location.replace("/report/received");
    } catch (error) {
      console.error(error);
      window.alert("Something went wrong submitting your report");
    }
  };

  return (
    <main className="p-5">
      <Meta
        title="Report An Incident"
        extra={<meta name="robots" content="noindex" />}
        url="https://soapbox.social/report/incident"
      />

      <div className="max-w-3xl w-full mx-auto p-5 md:p-10 bg-white rounded-room">
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          {/* Hidden */}
          <input
            type="text"
            name="userId"
            id="userId"
            ref={register}
            defaultValue={userId}
            hidden
          />

          {/* Hidden */}
          <input
            type="text"
            name="reportedUserId"
            id="reportedUserId"
            ref={register}
            defaultValue={reportedUserId}
            hidden
          />

          {/* Hidden */}
          <input
            type="text"
            name="reportedGroupId"
            id="reportedGroupId"
            ref={register}
            defaultValue={reportedGroupId}
            hidden
          />

          <div className="mb-6">
            <label htmlFor="email" className="mb-4">
              Your email address
            </label>
            <input
              type="email"
              autoComplete="email"
              name="email"
              id="email"
              ref={register}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="mb-4">
              Your name
            </label>
            <input
              type="text"
              autoComplete="name"
              name="name"
              id="name"
              ref={register}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="what" className="mb-4">
              What violated our rules?
            </label>
            <select name="what" id="what" ref={register} required>
              <option value="" selected>
                -
              </option>
              <option value="Room title">Room title</option>
              <option value="Group name">Group name</option>
              <option value="Conversation topic">Conversation topic</option>
              <option value="Comment by a speaker">Comment by a speaker</option>
              <option value="Profile photo">Profile photo</option>
              <option value="Something else">Something else</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="mb-4">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              autoComplete="off"
              id="subject"
              ref={register}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="details" className="mb-4">
              Give us details about the incident or issue
            </label>
            <textarea
              name="details"
              id="details"
              autoComplete="off"
              rows={5}
              ref={register}
              required
            />
          </div>

          <div className="mb-6">
            <label className="checkbox" htmlFor="reportIsCorrect">
              <input
                type="checkbox"
                name="reportIsCorrect"
                id="reportIsCorrect"
                ref={register}
                required
              />
              <span>
                I confirm that this incident report is true and correct and an
                inappropriate or false report is a violation.
              </span>
            </label>
          </div>

          <button className="button" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        label {
          display: block;
          font-size: 20px;
          line-height: 24px;
          font-weight: 600;
          letter-spacing: 0.38px;
        }

        input[type="text"],
        input[type="email"],
        select,
        textarea {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          border: none;
          width: 100%;

          border-radius: 15px;
          background-color: var(--background);
          padding: 1rem 1.25rem;

          font-size: 20px;
          line-height: 24px;
          font-weight: 500;

          color: var(--textPrimary);
        }

        textarea {
          resize: vertical;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
        }

        select {
          appearance: none;
        }

        label.checkbox {
          display: flex;
          align-items: flex-start;
        }

        .label.checkbox span {
          flex-grow: 0;
        }

        input[type="checkbox"] {
          flex-shrink: 0;
          margin-right: 1rem;
          display: block;
          height: 1.5rem;
          width: 1.5rem;
        }
      `}</style>
    </main>
  );
}
