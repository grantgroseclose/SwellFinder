import client from "./client";

const endpoint = "/spots";
const deleteEndpoint = "/spots/delete";

const getSpots = () => client.get(endpoint);

const addSpot = ({ name, description, latitude, longitude, image }) => { 
    const data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('latitude', latitude);
    data.append('longitude', longitude);
    data.append('image', {
        name: name + '_image',
        uri: image,
        type: 'image/jpg'
    });

    return client.post(endpoint, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    });
}

const deleteSpot = ({ _id }) => {
    return client.delete(deleteEndpoint, {
        id: _id
    });
}

export default {
  getSpots,
  addSpot,
  deleteSpot
};
