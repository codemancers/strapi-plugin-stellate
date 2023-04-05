"use strict";

module.exports = ({ strapi }) => ({
  async refresh(ctx) {
    const response = await strapi
      .plugin("stellate")
      .service("cacheService")
      .cacheService();

    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }

    ctx.body = response;
  },

  async refreshcollection(ctx) {
    const response = await strapi
      .plugin("stellate")
      .service("cacheService")
      .refreshCollectionCache(ctx.request.query.collection);

    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }

    ctx.body = response;
  },
});
