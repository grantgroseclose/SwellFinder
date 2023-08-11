import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

import colors from '../../config/colors';
import AppText from '../AppText';
import OutlookCard from '../OutlookCard';
import CardDisplay from '../CardDisplay';
import WaveHeightCard from '../WaveHeightCard';

import getWeekDaysFromNow from '../../utility/weekGenerator';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const ForecastDisplay = ({ spot, spotData}) => {
    const [weekDays, setWeekDays] = useState(getWeekDaysFromNow);

    return (
        <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <LineChart
                    data={{
                        labels: weekDays.map((day) => day.slice(0,3)),
                        datasets: [
                            {
                                data: spotData['wave_height']
                            }
                        ]
                    }}
                    width={(spotData['wave_height'].length * screenWidth) / 5}
                    height={screenHeight * 0.25}
                    withDots={false}
                    withInnerLines={false}
                    withOuterLines={false}
                    chartConfig={{
                        backgroundColor: colors.dark,
                        backgroundGradientFrom: colors.dark,
                        backgroundGradientTo: colors.dark,
                        backgroundGradientFromOpacity: 1,
                        backgroundGradientToOpacity: 1,
                        fillShadowGradientFrom: colors.blue,
                        fillShadowGradientTo: colors.dark,
                        color: (opacity = 1) => colors.blue,
                        labelColor: (opacity = 1) => colors.light,
                        propsForLabels: {
                            fontWeight: 'bold'
                        }
                    }}
                    bezier
                    style={{
                        borderRadius: 15,
                        marginTop: screenHeight * 0.025,
                        marginBottom: screenHeight * 0.025
                    }}
                    segments={2}
                    xLabelsOffset={0}
                    fromZero={true}
                    withHorizontalLabels={false}
                    // withVerticalLabels={false}
                    onDataPointClick={({ index, value, dataset, x, y }) => {
                        Alert.alert(index, value);
                    }}
                />
            </ScrollView>

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Forecast</AppText>}
                subHeader={
                    <>
                        <View style={{flex: 2, alignItems: 'center'}}>
                            <AppText passedStyle={styles.secondaryHeaderText}>Surf</AppText>
                        </View>
                        <View style={{flex: 3, alignItems: 'center'}}>
                            <AppText passedStyle={styles.secondaryHeaderText}>Swell</AppText>
                        </View>
                    </>
                }
                cards={
                <>
                    {
                        weekDays &&
                        weekDays.map((day, index) => 
                        <OutlookCard 
                            key={index}
                            title={day}
                            cardDetails={
                            <>
                                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
                                    <AppText passedStyle={styles.cardDetails}>{spotData['wave_height'][index]}</AppText>
                                    <AppText passedStyle={styles.atSymbol}>  @  </AppText>
                                    <AppText passedStyle={styles.cardDetails}>{parseFloat(parseFloat(spotData['wave_period'][index]).toFixed(1))}s</AppText>
                                </View>
                                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
                                    <AppText passedStyle={styles.cardDetails}>{spotData['swell_wave_height'][index]}</AppText>
                                    <AppText passedStyle={styles.atSymbol}>  @  </AppText>
                                    <AppText passedStyle={styles.cardDetails}>{parseFloat(parseFloat(spotData['swell_wave_period'][index]).toFixed(1))}s</AppText>
                                </View>
                                <View style={{flex: 1}}>
                                    <View style={{justifyContent: 'center', position: 'absolute', right: '50%',}}>
                                        <View style={{
                                        transform:[{rotateZ: spotData['swell_wave_direction'][index] + 'deg'}],
                                        justifyContent: 'center'
                                        }}>
                                            <MaterialCommunityIcons name='arrow-down-bold' color={colors.blue} size={25}/>
                                        </View>
                                        <AppText passedStyle={styles.degrees}>{spotData['swell_wave_direction'][index]}{'\u00b0'}</AppText>
                                    </View>
                                </View>
                            </>}
                        />
                    )}
                </>}
            />
        </>
    );
}




const styles = StyleSheet.create({
    headerTextContainer: {
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    headerText: {
        fontFamily: 'Inter-Black',
        color: colors.light,
        fontSize: 24,
    },
    secondaryHeaderText: {
        fontFamily: 'Inter-Black',
        color: colors.blue,
        fontSize: 14,
    },
    cardDetails: {
        fontFamily: 'Inter-Bold',
        fontSize: 14,
        color: colors.light,
    },
    waveDateContainer: {
        borderRadius: 15,
        backgroundColor: colors.light,
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth * .25,
        marginHorizontal: screenWidth * .0125,
    },
    atSymbol: {
        fontFamily: 'Inter-Medium',
        color: colors.medium,
        fontSize: 9
    },
    degrees: {
        fontFamily: 'Inter-Medium',
        color: colors.medium,
        fontSize: 12
    }
});


export default ForecastDisplay;
