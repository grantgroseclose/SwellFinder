import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

import colors from '../../config/colors';
import AppText from '../AppText';
import AppCard from '../AppCard';
import OutlookCard from '../OutlookCard';
import CardDisplay from '../CardDisplay';
import TideCard from '../TideCard';

import useApi from '../../hooks/useApi';
import getSpotData from '../../api/spot';
import { getSpot } from '../../server/store/spots';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const times = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
];




const LiveDisplay = ({ spot, spotData, tideLabels, tideData }) => {
    return (
        <>
            <View style={{marginBottom: '2.5%'}}>
                <View style={styles.headerTextContainer}>
                    <AppText passedStyle={styles.headerText}>Overview</AppText>
                </View>

                <View style={{alignItems: 'center'}}>
                    <AppCard title={spot.name} subTitle={spot.description} image={require('../../assets/icon.png')}/>
                </View>
            </View>

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Tides</AppText>}
                cards={
                    tideLabels?.length === 0 && tideData?.length === 0 &&
                    <TideCard>
                        <ActivityIndicator size="large" color={colors.blue} />
                    </TideCard>
                    
                    || tideLabels?.length !== 0 && tideData?.length !== 0 &&
                    <LineChart
                        data={{
                            labels: tideLabels,
                            datasets: [
                                {
                                    data: tideData
                                }
                            ]
                        }}
                        width={screenWidth}
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
                            // paddingRight: 0,
                            borderRadius: 15,
                            paddingVertical: '2.5%'
                        }}
                        segments={2}
                        xLabelsOffset={0}
                        // withHorizontalLabels={false}
                        withVerticalLabels={false}
                        onDataPointClick={({ index, value, dataset, x, y }) => {
                            Alert.alert(index, value);
                        }}
                    />
                }
            />

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Hourly</AppText>}
                subHeader={<>
                    <View style={{flex: 2, alignItems: 'center'}}>
                        <AppText passedStyle={styles.secondaryHeaderText}>Surf</AppText>
                    </View>
                    <View style={{flex: 3, alignItems: 'center'}}>
                        <AppText passedStyle={styles.secondaryHeaderText}>Swell</AppText>
                    </View>
                </>}
                cards={
                <>
                    {times.map((time, index) => 
                        <OutlookCard 
                        title={time}
                        cardDetails={
                            spotData?.length === 0 && spotData?.length === 0 &&
                                <ActivityIndicator size="large" color={colors.blue} />
                            ||
                            spotData?.length !== 0 && spotData?.length !== 0 &&
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
                                <View style={{justifyContent: 'center', position: 'absolute', right: '50%'}}>
                                    <View style={{
                                    transform:[{rotateZ: spotData['swell_wave_direction'][index] + 'deg'}],
                                    justifyContent: 'center'
                                    }}>
                                        <MaterialCommunityIcons name='arrow-down-bold' color={colors.blue} size={25}/>
                                    </View>
                                    <AppText passedStyle={styles.degrees}>{spotData['swell_wave_direction'][index]}{'\u00b0'}</AppText>
                                </View>
                            </View>
                        </>
                        }
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


export default LiveDisplay;
