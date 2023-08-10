import marineClient from "./marine";

const endpoint = "/v1/marine";

const getSpotLiveData = (latitude, longitude) => marineClient.get(
    endpoint,
    {
        hourly: 'wave_height,wave_period,swell_wave_height,swell_wave_direction,swell_wave_period',
        longitude: longitude,
        latitude: latitude
    }
);

const getSpotForecastData = (latitude, longitude) => marineClient.get(
    endpoint,
    {   
        timezone: 'GMT',
        daily: 'wave_height_max,wave_period_max,swell_wave_height_max,swell_wave_direction_dominant,swell_wave_period_max',
        longitude: longitude,
        latitude: latitude
    }
);

const getAllSpotsForecastData = async (spots) => {
    let forecastData = [];
    for (i = 0; i < spots.length; ++i) {
        const res = await marineClient.get(
            endpoint,
            {   
                timezone: 'GMT',
                daily: 'wave_height_max,wave_period_max,swell_wave_height_max,swell_wave_direction_dominant,swell_wave_period_max',
                longitude: spots[i]['location']['longitude'],
                latitude: spots[i]['location']['latitude']
            }
        );
        forecastData.push(res['data']['daily']);
    }
    return forecastData;
}

export default { getSpotLiveData, getSpotForecastData, getAllSpotsForecastData };