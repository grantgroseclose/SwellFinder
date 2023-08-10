import React, { useState, useEffect, useCallback } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, TouchableOpacity, RefreshControl, Modal, ActivityIndicator } from 'react-native';


import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import OutlookCard from '../components/OutlookCard';
import AppIcon from '../components/AppIcon';
import CardDisplay from '../components/CardDisplay';
import SearchModal from '../components/SearchModal';

import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import spotsApi from '../api/spots';
import getSpotApi from '../api/spot';

import getWeekDaysFromNow from '../utility/weekGenerator';
import AppButton from '../components/AppButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const HomeScreen = ({ navigation }) => {
    const { user, logOut } = useAuth();
    const getSpotsApi = useApi(spotsApi.getSpots);
    const [outlookData, setOutlookData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [weekDays, setWeekDays] = useState(getWeekDaysFromNow);
    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => {
        setModalVisible(!modalVisible);
    }


    let updatedOutlookData = [];
    useEffect(() => {
        const getOutlookData = async () => {
            const params = await getSpotsApi.request();
            const forecast = await getSpotApi.getAllSpotsForecastData(params['data']);
            forecast.forEach((spot) => {
                updatedOutlookData.push(spot['wave_height_max']);
            });

            setOutlookData(updatedOutlookData);
        }

        getOutlookData();
    }, []);


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        updatedOutlookData = [];
        
        const refreshOutlookData = async () => {
            const params = await getSpotsApi.request();
            const forecast = await getSpotApi.getAllSpotsForecastData(params['data']);
            forecast.forEach((spot) => {
                updatedOutlookData.push(spot['wave_height_max']);
            });

            setRefreshing(false);
        }

        refreshOutlookData();
        setOutlookData(updatedOutlookData);
    }, []);


    return (
        <Screen passedStyle={{alignItems: 'flex-start'}}>
            {modalVisible &&
                <SearchModal toggleModal={handleModal} spots={getSpotsApi['data']} />
            }

            <ScrollView 
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            >
                <View style={styles.iconContainer}>
                    <AppIcon name='waves' size={70} />
                    <TouchableOpacity onPress={handleModal}>
                        <AppIcon name='magnify' backgroundColor='transparent' size={60} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.headerTextContainer}>
                        <AppText passedStyle={styles.headerText}>My spots</AppText>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{padding: '5%'}}>
                        {
                            getSpotsApi.data &&
                            getSpotsApi.data.map((spot) =>
                                <AppCard title={spot.name} subTitle={spot.description} image={require('../assets/icon.png')} onPress={() => navigation.navigate('SpotScreen', {spot: spot})}/>
                        )}
                        </ScrollView>
                    </View>
                </View>

                <CardDisplay
                    header={<AppText passedStyle={styles.headerText}>Outlook</AppText>}
                    subHeader={
                        <>
                        {
                            weekDays &&
                            weekDays.map((day) => <AppText passedStyle={styles.secondaryHeaderText}>{day.slice(0, 3)}</AppText>)
                        }
                        </>
                    }
                    
                    cards={
                        <>
                        {
                            getSpotsApi.data &&
                            getSpotsApi.data.map((spot, index) => <OutlookCard title={spot.name} cardDetails={
                                outlookData?.length === 0 && outlookData?.length === 0 &&
                                <ActivityIndicator size="small" color={colors.blue} />
                                ||
                                outlookData?.length !== 0 && outlookData?.length !== 0 &&
                                <>
                                {
                                    outlookData && 
                                    outlookData[index]?.map((data) => <AppText passedStyle={styles.cardDetails}>{data}</AppText>
                                )}
                                </>
                            }/>)
                        }
                        </>
                    }
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
        color: colors.light,
    }
});

export default HomeScreen;
