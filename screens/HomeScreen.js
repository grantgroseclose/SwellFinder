import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';


import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import OutlookCard from '../components/OutlookCard';
import AppIcon from '../components/AppIcon';
import CardDisplay from '../components/CardDisplay';

import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import spotsApi from '../api/spots';
import getSpotApi from '../api/spot';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const HomeScreen = ({ navigation }) => {
    const { user, logOut } = useAuth();
    const getSpotsApi = useApi(spotsApi.getSpots);
    const getSpotForecastApi = useApi(getSpotApi.getSpotForecastData);
    const [ outlookData, setOutlookData ] = useState([]);

    useEffect(() => {
        setOutlookData([]);
        
        getSpotsApi.request().then((response) => {
            response.data.map((spot) => {
                getSpotForecastApi.request(spot['location']['latitude'], spot['location']['longitude']).then((response) => {
                    setOutlookData(currentData => [...currentData, response.data['daily']['wave_height_max']]);
                });
            });
        });
    }, []);

    return (
        <Screen passedStyle={{alignItems: 'flex-start'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.iconContainer}>
                    <AppIcon name='waves' size={70} />
                    <TouchableOpacity onPress={() => logOut()}>
                        <AppIcon name='magnify' backgroundColor='transparent' size={60} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.headerTextContainer}>
                        <AppText passedStyle={styles.headerText}>My spots</AppText>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{padding: '5%'}}>
                            {getSpotsApi.data.map((spot) =>
                                <AppCard title={spot.name} subTitle={spot.description} image={require('../assets/icon.png')} onPress={() => navigation.navigate('SpotScreen', {spot: spot})}/>
                            )}
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
                        {getSpotsApi.data &&
                         getSpotsApi.data.map((spot, index) =>
                            <OutlookCard title={spot.name} cardDetails={<> 
                                {outlookData && 
                                 outlookData[index]?.map((data) =>
                                    <AppText passedStyle={styles.cardDetails}>{data}</AppText>
                                )}
                            </>}/>
                        )}
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
    cardDetails: {
        fontFamily: 'Inter-Bold',
        fontSize: 14,
        color: colors.dark,
    }
});

export default HomeScreen;
