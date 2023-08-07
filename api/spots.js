import client from "./client";

const endpoint = "/spots";

const getSpots = () => client.get(endpoint);

const addSpot = (name, description, latitude, longitude) => client.post(endpoint, {name, description, latitude, longitude});

export default {
  getSpots,
  addSpot
};
