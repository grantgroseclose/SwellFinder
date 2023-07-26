import React from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';


import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import OutlookCard from '../components/OutlookCard';
import AppIcon from '../components/AppIcon';
import CardDisplay from '../components/CardDisplay';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const HomeScreen = ({ navigation }) => {
    return (
        <Screen passedStyle={{alignItems: 'flex-start'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.iconContainer}>
                    <AppIcon name='waves' size={70} />
                    <TouchableOpacity>
                        <AppIcon name='magnify' backgroundColor='transparent' size={60} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.headerTextContainer}>
                        <AppText passedStyle={styles.headerText}>My spots</AppText>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{padding: '5%'}}>
                            <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../assets/icon.png')} onPress={() => navigation.navigate('SpotScreen')}/>
                            <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../assets/icon.png')} onPress={() => navigation.navigate('SpotScreen')}/>
                            <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../assets/icon.png')} onPress={() => navigation.navigate('SpotScreen')}/>
                            <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../assets/icon.png')} onPress={() => navigation.navigate('SpotScreen')}/>
                        </ScrollView>
                    </View>
                </View>

                <CardDisplay
                    header={<AppText passedStyle={styles.headerText}>Outlook</AppText>}
                    subHeader={<>
                        <AppText passedStyle={styles.secondaryHeaderText}>Sun</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Mon</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Tue</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Wed</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Thu</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Fri</AppText>
                    </>}
                    cards={<>
                        <OutlookCard 
                            title='Spot 1'
                            cardText={<>
                                <AppText passedStyle={styles.cardText}>2-3</AppText>
                                <AppText passedStyle={styles.cardText}>2-3</AppText>
                                <AppText passedStyle={styles.cardText}>2-3</AppText>
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
                                <AppText passedStyle={styles.cardText}>2-3</AppText>
                                <AppText passedStyle={styles.cardText}>2-3</AppText>
                                <AppText passedStyle={styles.cardText}>2-3</AppText>
                            </>}
                        />
                    </>}
                />
            </ScrollView>
        </Screen>
    );
}



const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginBottom: '2.5%'
    },
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

export default HomeScreen;
