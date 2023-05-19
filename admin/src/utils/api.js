import axios from "./axiosInstance";
import pluginId from "../pluginId";

export const refreshCache = async (type) => {
  if (type === "all") {
    await refreshAllCache();
    return true;
  } else {
    const query = type.replace(type[0], type[0].toUpperCase());
    await refreshCollectionCache(query);
    return true;
  }
};

export const refreshAllCache = async () => {
  try {
    const response = await axios({
      url: `${pluginId}/cache/refresh`,
      method: "POST",
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const refreshCollectionCache = async (collection) => {
  try {
    const response = await axios({
      url: `${pluginId}/cache/refreshcollection`,
      method: "POST",
      data: {
        collection: collection,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getCollectionTypes = async () => {
  try {
    const response = await axios({
      url: `${pluginId}/collections`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
