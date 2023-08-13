import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

import colors from '../../config/colors';
import AppText from '../AppText';
import AppCard from '../AppCard';
import OutlookCard from '../OutlookCard';
import CardDisplay from '../CardDisplay';
import AppSwitch from '../AppSwitch';

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
    const [measure, setMeasure] = useState(2);
    const [adjustedData, setAdjustedData] = useState(spotData);
    const [heightInFeet, setHeightInFeet] = useState(spotData);

    const toggleMeasure = (val) => {
        if (measure === val) return;

        setMeasure(val);

        if (val === 1) {
            setAdjustedData(heightInFeet);
        }
        else if (val === 2) {
            setAdjustedData(spotData);
        }
    }

    useEffect(() => {
        let heights = {
            'wave_height': [],
            'swell_wave_height': []
        };

        spotData['wave_height'].map((height, index) => {
            heights['wave_height'].push(parseFloat((height * 3).toFixed(2)));
            heights['swell_wave_height'].push(parseFloat((spotData['swell_wave_height'][index] * 3).toFixed(2)));
        });

        setHeightInFeet(heights);
    }, []);

    return (
        <>
            <View style={{marginBottom: '2.5%'}}>
                <View style={styles.headerTextContainer}>
                    <AppText passedStyle={styles.headerText}>Overview</AppText>
                </View>

                <View style={{alignItems: 'center'}}>
                    <AppCard title={spot.name} subTitle={spot.description} image={require('../../assets/smyrna.png')}/>
                </View>
            </View>

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Tides</AppText>}
                cards={
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
                        // withVerticalLabels={false}
                        onDataPointClick={({ index, value, dataset, x, y }) => {
                            Alert.alert(index, value);
                        }}
                    />
                }
            />

            <CardDisplay
                header={
                <>
                    <AppText passedStyle={styles.headerText}>Hourly</AppText>
                    <AppSwitch 
                    containerStyle={styles.toggleContainerStyle}
                    selectionMode={2}
                    option1={'(ft)'}
                    option2={'(m)'}
                    onSelectSwitch={toggleMeasure}
                    selectionColor={colors.light}
                    />
                    {/* <AppText passedStyle={styles.headerText}>Hourly</AppText> */}
                </>
                }
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
                        key={index}
                        title={time}
                        cardDetails={
                        <>
                            <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
                                <AppText passedStyle={styles.cardDetails}>{adjustedData['wave_height'][index]}</AppText>
                                <AppText passedStyle={styles.atSymbol}>  @  </AppText>
                                <AppText passedStyle={styles.cardDetails}>{parseFloat(parseFloat(spotData['wave_period'][index]).toFixed(1))}s</AppText>
                            </View>
                            <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
                                <AppText passedStyle={styles.cardDetails}>{adjustedData['swell_wave_height'][index]}</AppText>
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
        alignSelf: 'flex-start',
        marginBottom: '2.5%',
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
    },
    toggleContainerStyle: {
        flexDirection: 'row',
        padding: '2.5%',
        justifyContent: 'flex-end',
    }
});


export default LiveDisplay;
