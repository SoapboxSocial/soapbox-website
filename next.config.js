const withMDX = require("@next/mdx")();

module.exports = withMDX({
  images: {
    domains: ["cdn.soapbox.social"],
  },
  async redirects() {
    return [
      {
        source: "/deck",
        destination:
          "https://app.pitch.com/app/presentation/18786779-94a0-468a-b077-46bf99e9cc7b/32695aa9-d706-4579-a514-702222601d84",
        permanent: false,
      },
    ];
  },
});
