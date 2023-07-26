import React, { useState } from 'react';
import { Dimensions, StyleSheet, ScrollView } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppSwitch from '../components/AppSwitch';
import LiveDisplay from '../components/displays/LiveDisplay';
import ForecastDisplay from '../components/displays/ForecastDisplay';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const SpotScreen = (props) => {
    const [forecastMode, setForecastMode] = useState(1);
    const toggleForecast = (val) => { setForecastMode(val); }

    let toggleDisplay = (forecastMode == 1) ? (<LiveDisplay />) : (<ForecastDisplay />);
    

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
