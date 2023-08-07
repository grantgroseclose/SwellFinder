const spots = [
    {
        id: 1,
        userId: 1,
        name: 'New Smyrna Beach',
        description: 'Inlet',
        location: {
            latitude: 29.06,
            longitude: -80.91,
        },
    },
    {
        id: 2,
        userId: 1,
        name: 'Jax Beach Pier',
        description: 'Pier',
        location: {
            latitude: 30.28,
            longitude: -81.39,
        }
    },
    {
        id: 3,
        userId: 1,
        name: 'St. Aug Pier',
        description: 'Pier',
        location: {
            latitude: 29.90,
            longitude: -81.31,
        }
    },
];

const addSpot = (spot) => {
    spot.id = spots.length + 1;
    spots.push(spot);
};

const getSpots = () => spots;

const getSpot = (id) => spots.find((spot) => spot.id === id);

const filterSpots = (predicate) => spots.filter(predicate);

module.exports = {
  addSpot,
  getSpots,
  getSpot,
  filterSpots
};
