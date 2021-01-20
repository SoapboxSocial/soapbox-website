const withMDX = require("@next/mdx")();

module.exports = withMDX({
  images: {
    domains: ["cdn.soapbox.social"],
  },
});
