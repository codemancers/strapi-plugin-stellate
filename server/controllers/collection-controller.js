"use strict";
module.exports = ({ strapi }) => ({
  async getCollectionTypes(ctx) {
    const response = await strapi
      .plugin("stellate")
      .service("collectionService")
      .getCollectionTypes();
    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }
    ctx.body = response;
  },
});
