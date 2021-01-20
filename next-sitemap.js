module.exports = {
  siteUrl: "https://soapbox.social",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/room"],
      },
    ],
  },
  exclude: [
    "/login-pin",
    "/report/incident",
    "/report/received",
    "/room/*",
    "/room",
  ],
};
