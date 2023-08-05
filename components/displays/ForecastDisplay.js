import React from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';
import OutlookCard from '../OutlookCard';
import CardDisplay from '../CardDisplay';
import WaveHeightCard from '../WaveHeightCard';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const ForecastDisplay = () => {
    return (
        <>
            <WaveHeightCard 
                cardDetails={<ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                    <View style={styles.waveDateContainer}>
                        <AppText passedStyle={styles.cardDetails}>Sunday</AppText>
                    </View>
                </ScrollView>}
            />

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Forecast</AppText>}
                subHeader={<>
                    <AppText passedStyle={styles.secondaryHeaderText}>Surf</AppText>
                    <AppText passedStyle={styles.secondaryHeaderText}>Swell</AppText>
                    <AppText passedStyle={styles.secondaryHeaderText}>Wind</AppText>
                </>}
                cards={<>
                    <OutlookCard 
                        title='Sunday'
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Monday'
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Tuesday'
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Wednesday'
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Thursday'
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Spot 1'
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Friday'
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Saturday'
                        cardDetails={<>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                            <AppText passedStyle={styles.cardDetails}>2-3</AppText>
                        </>}
                    />
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
    }
});


export default ForecastDisplay;