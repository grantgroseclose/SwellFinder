import marineClient from "./marine";

const endpoint = "/v1/marine";

const getSpotLiveData = (latitude, longitude) => marineClient.get(
    endpoint,
    {
        hourly: 'wave_height,wave_period,swell_wave_height,swell_wave_period',
        longitude: longitude,
        latitude: latitude
    }
);

const getSpotForecastData = (latitude, longitude) => marineClient.get(
    endpoint,
    {   
        timezone: 'GMT',
        daily: 'wave_height_max,wave_period_max,swell_wave_height_max,swell_wave_period_max',
        longitude: longitude,
        latitude: latitude
    }
);

export default { getSpotLiveData, getSpotForecastData };