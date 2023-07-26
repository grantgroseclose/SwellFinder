import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';
import AppCard from '../AppCard';
import OutlookCard from '../OutlookCard';
import CardDisplay from '../CardDisplay';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const LiveDisplay = () => {
    return (
        <>
            <View style={{marginBottom: '2.5%'}}>
                <View style={styles.headerTextContainer}>
                    <AppText passedStyle={styles.headerText}>Overview</AppText>
                </View>

                <View style={{alignItems: 'center'}}>
                    <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../../assets/icon.png')}/>
                </View>
            </View>

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Tides</AppText>}
                cards={<>
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                        </>}
                    />
                </>}
            />

            <CardDisplay
                header={<AppText passedStyle={styles.headerText}>Hourly</AppText>}
                subHeader={<>
                    <AppText passedStyle={styles.secondaryHeaderText}>Surf</AppText>
                    <AppText passedStyle={styles.secondaryHeaderText}>Swell</AppText>
                    <AppText passedStyle={styles.secondaryHeaderText}>Wind</AppText>
                </>}
                cards={<>
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                        </>}
                    />
                    <OutlookCard 
                        title='Spot 1'
                        cardText={<>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
                            <AppText passedStyle={styles.cardText}>2-3</AppText>
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
    cardText: {
        fontFamily: 'Inter-Bold',
        fontSize: 14,
        color: colors.dark,
    }
});


export default LiveDisplay;
