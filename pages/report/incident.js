import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Incident() {
  const { query } = useRouter();
  const userId = query.userId;
  const reportedUserId = query.reportedUserId;

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

      window.alert("Your report has been received successfully.");

      reset();
    } catch (error) {
      console.error(error);
      window.alert("Something went wrong submitting your report");
    }
  };

  return (
    <main className="main">
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

        <div>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            autoComplete="email"
            name="email"
            id="email"
            ref={register}
            required
          />
        </div>

        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            autoComplete="name"
            name="name"
            id="name"
            ref={register}
            required
          />
        </div>

        <div>
          <label htmlFor="what">What violated our rules?</label>
          <select name="what" id="what" ref={register} required>
            <option value="" selected>
              -
            </option>
            <option value="Room title">Room title</option>
            <option value="Conversation topic">Conversation topic</option>
            <option value="Comment by a speaker">Comment by a speaker</option>
            <option value="Profile photo">Profile photo</option>
            <option value="Something else">Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            autoComplete="off"
            id="subject"
            ref={register}
            required
          />
        </div>

        <div>
          <label htmlFor="details">
            Give us details about the incident or issue
          </label>
          <textarea
            name="details"
            id="details"
            autoComplete="off"
            cols="30"
            rows="10"
            ref={register}
            required
          />
        </div>

        <div>
          <label htmlFor="reportIsCorrect">
            <span>
              I confirm that this incident report is true and correct and an
              inappropriate or false report is a violation.
            </span>
            <input
              type="checkbox"
              name="reportIsCorrect"
              id="reportIsCorrect"
              ref={register}
              required
            />
          </label>
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
