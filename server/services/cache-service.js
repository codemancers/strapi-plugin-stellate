"use strict";
const axios = require("axios");
const { buildConfig } = require("./utils");

module.exports = ({ strapi }) => ({
  async cacheService() {
    try {
      const config = buildConfig(strapi);
      if (!config) {
        throw "Missing configuration";
      }
      const data = await axios({
        url: `${config.stellateUrl}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "stellate-token": `${config.stellateToken}`,
        },
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
      const config = buildConfig(strapi);
      if (!config) {
        throw "Missing configuration";
      }
      const data = await axios({
        url: `${config.stellateUrl}`,
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          "stellate-token": `${config.stellateToken}`,
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
