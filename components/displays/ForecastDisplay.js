import React from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';
import OutlookCard from '../OutlookCard';
import CardDisplay from '../CardDisplay';
import WaveHeightCard from '../WaveHeightCard';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];




const ForecastDisplay = ({ spot, spotData}) => {
    return (
        <>
            <WaveHeightCard 
                cardDetails={<ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Monday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Tuesday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Wednesday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Thursday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Friday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Saturday</AppText>
                    </View>
                </ScrollView>}
            />

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Forecast</AppText>}
                subHeader={<>
                    <AppText passedStyle={styles.secondaryHeaderText}>Surf</AppText>
                    <AppText passedStyle={styles.secondaryHeaderText}>Swell</AppText>
                </>}
                cards={<>
                        {weekDays.map((day, index) => 
                            <OutlookCard 
                            title={day}
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
    }
});


export default ForecastDisplay;
