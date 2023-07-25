import React from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import OutlookCard from '../components/OutlookCard';
import AppIcon from '../components/AppIcon';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const HomeScreen = (props) => {
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
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.spotScrollView}>
                            <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../assets/icon.png')}/>
                            <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../assets/icon.png')}/>
                            <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../assets/icon.png')}/>
                            <AppCard title='Spot 1' subTitle='Spot 1 coordinates' image={require('../assets/icon.png')}/>
                        </ScrollView>
                    </View>
                </View>

                <View>
                    <View style={styles.headerTextContainer}>
                        <AppText passedStyle={styles.headerText}>Outlook</AppText>
                    </View>

                    <View style={styles.datesContainer}>
                        <AppText passedStyle={styles.secondaryHeaderText}>Sun</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Mon</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Tue</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Wed</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Thu</AppText>
                        <AppText passedStyle={styles.secondaryHeaderText}>Fri</AppText>
                    </View>

                    <View>
                        <ScrollView contentContainerStyle={styles.outlookScrollView}>
                            <OutlookCard title='Spot 1' />
                            <OutlookCard title='Spot 1' />
                            <OutlookCard title='Spot 1' />
                            <OutlookCard title='Spot 1' />
                            <OutlookCard title='Spot 1' />
                            <OutlookCard title='Spot 1' />
                            <OutlookCard title='Spot 1' />
                            <OutlookCard title='Spot 1' />
                        </ScrollView>
                    </View>
                </View>
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
    spotScrollView: {
        padding: '5%'
    },
    datesContainer: {
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingHorizontal: '5%'
    },
    outlookScrollView: {
        alignItems: 'center'
    },
});

export default HomeScreen;
