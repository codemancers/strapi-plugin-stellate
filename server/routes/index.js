module.exports = [
  {
    method: "POST",
    path: "/cache/refreshcache",
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
