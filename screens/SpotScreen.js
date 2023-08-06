import React, { useState, useEffect, createContext } from 'react';
import { Dimensions, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppSwitch from '../components/AppSwitch';
import LiveDisplay from '../components/displays/LiveDisplay';
import ForecastDisplay from '../components/displays/ForecastDisplay';

import useApi from '../hooks/useApi';
import getSpotApi from '../api/spot';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const SpotScreen = (props) => {
    const [spotLiveData, setSpotLiveData] = useState({
        'wave_height': [],
        'wave_period': [],
        'swell_wave_height': [],
        'swell_wave_period': [],
    });
    const [spotForecastData, setSpotForecastData] = useState({
        'wave_height': [],
        'wave_period': [],
        'swell_wave_height': [],
        'swell_wave_period': [],
    });

    const [forecastMode, setForecastMode] = useState(1);
    const route = useRoute();

    const spot = route['params']['spot'];
    const latitude = spot['location']['latitude'].toString();
    const longitude = spot['location']['longitude'].toString();
    
    const getSpotLiveApi = useApi(getSpotApi.getSpotLiveData);
    const getSpotForecastApi = useApi(getSpotApi.getSpotForecastData);

    useEffect(() => {
        getSpotLiveApi.request(latitude, longitude).then((response) => {
            setSpotLiveData({
                'wave_height': response.data['hourly']['wave_height'].slice(0, 24),
                'wave_period': response.data['hourly']['wave_period'].slice(0, 24),
                'swell_wave_height': response.data['hourly']['swell_wave_height'].slice(0, 24),
                'swell_wave_period': response.data['hourly']['swell_wave_period'].slice(0, 24)
            });
        });

        getSpotForecastApi.request(latitude, longitude).then((response) => {
            setSpotForecastData({
                'wave_height': response.data['daily']['wave_height_max'],
                'wave_period': response.data['daily']['wave_period_max'],
                'swell_wave_height': response.data['daily']['swell_wave_height_max'],
                'swell_wave_period': response.data['daily']['swell_wave_period_max']
            });
        });
    }, []);
    


    const toggleForecast = (val) => { setForecastMode(val); }

    let toggleDisplay = (forecastMode == 1 && spotLiveData && spotForecastData) ? (<LiveDisplay spot={spot} spotData={spotLiveData} />) : (<ForecastDisplay spot={spot} spotData={spotForecastData} />);
    
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

                <>{toggleDisplay}</>
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
