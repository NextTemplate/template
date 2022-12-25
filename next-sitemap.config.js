// next-sitemap.js
/** @type {import("next-sitemap").IConfig} */

module.exports = {
    siteUrl: `https://${process.env.SITE_DOMAIN}`,
    generateRobotsTxt: true,
    exclude: ["/server-sitemap.xml"],
    robotsTxtOptions: {
      additionalSitemaps: [
        `https://${process.env.SITE_DOMAIN}` + "/server-sitemap.xml",
      ],
    },
  };
  