"use strict";
const axios = require("axios");

module.exports = ({ strapi }) => ({
  async cacheService() {
    try {
      const data = await axios({
        url: process.env.STELLATE_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "stellate-token": process.env.STELLATE_TOKEN,
        },
        // eslint-disable-next-line quotes
        data: { query: `mutation { _purgeAll }` },
      });

      return data.data;
    } catch (error) {
      console.error("Error while deploying -", error);
      return {
        error: `Error while deploying - ${error}`,
      };
    }
  },
  async refreshCollectionCache(query) {
    try {
      const data = await axios({
        url: process.env.STELLATE_URL,
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          "stellate-token": process.env.STELLATE_TOKEN,
        },
        data: { query: `mutation { purge${query} }` },
      });

      return data.data;
    } catch (error) {
      console.error("Error while deploying -", error);
      return {
        error: `Error while deploying - ${error}`,
      };
    }
  },
});
