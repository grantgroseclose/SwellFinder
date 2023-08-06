import React, { useEffect, useContext } from 'react';
import { Dimensions, StyleSheet, View, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

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




const LiveDisplay = ({ spot, spotData}) => {
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
                cards={<>
                    <TideCard 
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>hello</AppText>
                        </>}
                    />
                </>}
            />

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Hourly</AppText>}
                subHeader={<>
                    <AppText passedStyle={styles.secondaryHeaderText}>Surf</AppText>
                    <AppText passedStyle={styles.secondaryHeaderText}>Swell</AppText>
                </>}
                cards={<>
                    {times.map((time, index) => 
                        <OutlookCard 
                        title={time}
                        cardDetails={<>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <AppText passedStyle={styles.cardDetails}>{spotData['wave_height'][index]}</AppText>
                                <AppText passedStyle={styles.atSymbol}>  @  </AppText>
                                <AppText passedStyle={styles.cardDetails}>{spotData['wave_period'][index]}s</AppText>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <AppText passedStyle={styles.cardDetails}>{spotData['swell_wave_height'][index]}</AppText>
                                <AppText passedStyle={styles.atSymbol}>  @  </AppText>
                                <AppText passedStyle={styles.cardDetails}>{spotData['swell_wave_period'][index]}s</AppText>
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
        fontFamily: 'Inter-Medium',
        color: colors.medium,
        fontSize: 14,
    },
    cardDetails: {
        fontFamily: 'Inter-Bold',
        fontSize: 14,
        color: colors.dark,
    },
    atSymbol: {
        fontFamily: 'Inter-Medium',
        color: colors.medium,
        fontSize: 9
    }
});


export default LiveDisplay;
