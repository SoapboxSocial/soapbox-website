import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Page from "../../components/page";

export default function Incident() {
  const { query } = useRouter();
  const userId = query.userId;
  const reportedUserId = query.reportedUserId;
  const reportedGroupId = query.reportedGroupId;

  const { register, handleSubmit, formState, reset } = useForm();

  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
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
    <Page isNavigable={false}>
      <main className="main">
        <h1>Report An Incident</h1>

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
              rows="5"
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
      </main>
    </Page>
  );
}
