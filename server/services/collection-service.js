module.exports = ({ strapi }) => ({
  async getCollectionTypes() {
    try {
      const collections = Object.entries(strapi.contentTypes)
        .filter((collection) => collection[0].startsWith("api"))
        .map((item) => item[1].info.displayName);

      return collections;
    } catch (error) {
      console.error(`Error while fetching collection types: ${error}`);
      return { error };
    }
  },
});
