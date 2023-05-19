import pluginPkg from "../../package.json";

const packageName = pluginPkg.name.split("/")[1];

const pluginId = packageName.replace(/^(@[^-,.][\w,-]+\/|strapi-)plugin-/i, "");

export default pluginId;
