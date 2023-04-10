const pluginId = require("./pluginId");

const getPluginConfig = (strapi) => strapi.plugin(pluginId).config;

module.exports = getPluginConfig;
