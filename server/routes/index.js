module.exports = [
  {
    method: "POST",
    path: "/cache/refresh",
    handler: "cacheController.refresh",
    config: {
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/cache/refreshcollection",
    handler: "cacheController.refreshcollection",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/collections",
    handler: "collectionController.getCollectionTypes",
    config: {
      policies: [],
    },
  },
];
