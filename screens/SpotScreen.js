import React, { useState, useEffect, createContext } from 'react';
import { Dimensions, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import moment from 'moment';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppSwitch from '../components/AppSwitch';
import LiveDisplay from '../components/displays/LiveDisplay';
import ForecastDisplay from '../components/displays/ForecastDisplay';

import useApi from '../hooks/useApi';
import getSpotApi from '../api/spot';
import getTideApi from '../api/tide';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const SpotScreen = (props) => {
    const [loading, setLoading] = useState(true);

    const [spotLiveData, setSpotLiveData] = useState({
        'wave_height': [],
        'wave_period': [],
        'swell_wave_height': [],
        'swell_wave_period': [],
        'swell_wave_direction': []
    });
    const [spotForecastData, setSpotForecastData] = useState({
        'wave_height': [],
        'wave_period': [],
        'swell_wave_height': [],
        'swell_wave_period': [],
        'swell_wave_direction': []
    });

    const [forecastMode, setForecastMode] = useState(1);
    const route = useRoute();

    const [tideLabels, setTideLabels] = useState([]);
    const [tideData, setTideData] = useState([]);

    const spot = route['params']['spot'];
    const latitude = spot['location']['latitude'].toString();
    const longitude = spot['location']['longitude'].toString();
    
    const getSpotLiveApi = useApi(getSpotApi.getSpotLiveData);
    const getSpotForecastApi = useApi(getSpotApi.getSpotForecastData);
    const getSpotTideApi = useApi(getTideApi.getSpotTideData);

    const timestamp = moment().utc().startOf('day').unix();

    let newTideLabels = [];
    let newTideData = [];

    useEffect(() => {
        const getData = async () => {
            const liveParams = await getSpotLiveApi.request(latitude, longitude);
            const forecastParams = await getSpotForecastApi.request(latitude, longitude);
    
            const tideData = await getSpotTideApi.request(timestamp, latitude, longitude);
            tideData['data']['extremes'].forEach((extreme) => {
                newTideLabels.push(extreme['datetime'].slice(11, 16));
                newTideData.push(parseFloat(extreme['height'].toFixed(2)));
            });
            
            setSpotLiveData({
                'wave_height': liveParams.data['hourly']['wave_height'].slice(0, 24),
                'wave_period': liveParams.data['hourly']['wave_period'].slice(0, 24),
                'swell_wave_height': liveParams.data['hourly']['swell_wave_height'].slice(0, 24),
                'swell_wave_period': liveParams.data['hourly']['swell_wave_period'].slice(0, 24),
                'swell_wave_direction': liveParams.data['hourly']['swell_wave_direction'].slice(0, 24)
            });

            setSpotForecastData({
                'wave_height': forecastParams.data['daily']['wave_height_max'],
                'wave_period': forecastParams.data['daily']['wave_period_max'],
                'swell_wave_height': forecastParams.data['daily']['swell_wave_height_max'],
                'swell_wave_period': forecastParams.data['daily']['swell_wave_period_max'],
                'swell_wave_direction': forecastParams.data['daily']['swell_wave_direction_dominant']
            });
            
            setTideLabels(newTideLabels);
            setTideData(newTideData);

            setLoading(false);
        }

        getData();
    }, []);


    const toggleForecast = (val) => { setForecastMode(val); }

    let toggleDisplay = (forecastMode == 1 && spotLiveData && spotForecastData && tideLabels && tideData) ? (<LiveDisplay spot={spot} spotData={spotLiveData} tideLabels={tideLabels} tideData={tideData} />) : (<ForecastDisplay spot={spot} spotData={spotForecastData} />);
    
    return (
        <Screen passedStyle={{alignItems: 'flex-start'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppSwitch 
                    containerStyle={styles.toggleContainerStyle}
                    selectionMode={1}
                    option1={'Live'}
                    option2={'Forecast'}
                    onSelectSwitch={toggleForecast}
                    selectionColor={colors.light}
                />

                { loading ? <ActivityIndicator size="large" color={colors.blue} />
                :
                <>{toggleDisplay}</>
                }
            </ScrollView>
        </Screen>
    );
}




const styles = StyleSheet.create({
    toggleContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        padding: '5%',
        justifyContent: 'flex-end'
    }
});


export default SpotScreen;
