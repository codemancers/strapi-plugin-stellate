"use strict";

const getPluginConfig = require("../../server/helpers/pluginConfig");

const buildConfig = (strapi) => {
  const pluginConfig = getPluginConfig(strapi);
  return {
    stellateUrl: pluginConfig("stellateUrl"),
    stellateToken: pluginConfig("stellateToken"),
  };
};

module.exports = {
  buildConfig,
};
