import client from "./client";

const endpoint = "/spots";

const getSpots = () => client.get(endpoint);

export default {
  getSpots
};
