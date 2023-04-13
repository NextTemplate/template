const axios = require("axios");

async function getTotalCount() {
  try {
    const response = await axios.get("https://" + process.env.SITE_DOMAIN + ".microcms.io/api/v1/" + process.env.ENDPOINT, {
      headers: {
        "X-API-KEY": process.env.API_KEY
      }
    });

    const totalCount = response.headers["x-total-count"];

    console.log("totalCount:", totalCount);
  } catch (error) {
    console.error(error);
  }
}

export default getTotalCount();
