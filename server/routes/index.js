module.exports = [
  {
    method: "POST",
    path: "/cache/refresh",
    handler: "cacheController.refreshcache",
    config: {
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/cache/refreshcollectioncache",
    handler: "cacheController.refreshcollectioncache",
    config: {
      policies: [],
    },
  },
];
