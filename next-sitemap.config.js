// next-sitemap.js
/** @type {import("next-sitemap").IConfig} */

module.exports = {
    siteUrl: `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`,
    generateRobotsTxt: true,
    exclude: ["/server-sitemap.xml"],
    robotsTxtOptions: {
      additionalSitemaps: [
        `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}` + "/server-sitemap.xml",
      ],
    },
  };
  