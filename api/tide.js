
import apiClient from "./client";

const endpoint = "/tide";

const getSpotTideData = (timestamp, latitude, longitude) => apiClient.get(
    endpoint,
    {
        timestamp: timestamp,
        longitude: longitude,
        latitude: latitude
    }
);

export default { getSpotTideData };