import { octokit } from "../../../lib/octokit";

export default async (req, res) => {
  const report = req.body;

  try {
    const subject = report?.subject || "No Subject";
    const name = report?.name || "No Name";
    const userId = report?.userId || "No User ID";
    const email = report?.email || "No Email";

    const reportedUserId = report?.reportedUserId || "No Reported User";
    const reportedGroupId = report?.reportedGroupId || "No Reported Group";

    const title = `${subject} (${name})`;

    const details = report?.details || "No Details";

    const what = report?.what || "Not Provided";

    const markdown = `
# Incident

- **Name**: ${name}
- **User ID**: ${userId}
- **Email**: ${email}

- **Reported User ID**: ${reportedUserId}
- **Reported Group ID**: ${reportedGroupId}

## Subject

${subject}

## Give us details about the incident or issue

${details}

## What violated our rules

${what}
`;

    const response = await octokit.request(
      "POST /repos/SoapboxSocial/reports/issues",
      {
        owner: "SoapboxSocial",
        repo: "reports",
        title: title,
        body: markdown,
        assignees: ["mirshko", "decanus"],
      }
    );

    if (response.status === 201) {
      res.status(201).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      error: "",
      message: "",
    });
  }
};
