import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, RefreshControl, ActivityIndicator, Alert } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import OutlookCard from '../components/OutlookCard';
import AppIcon from '../components/AppIcon';
import CardDisplay from '../components/CardDisplay';
import SearchModal from '../components/SearchModal';

import useApi from '../hooks/useApi';
import spotsApi from '../api/spots';
import getSpotApi from '../api/spot';

import getWeekDaysFromNow from '../utility/weekGenerator';




const HomeScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const getSpotsApi = useApi(spotsApi.getSpots);
    const [outlookData, setOutlookData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [weekDays, setWeekDays] = useState(getWeekDaysFromNow);
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteSpot, deleteSpotFailed] = useState(false);
    const [spots, setSpots] = useState([]);
    
    useEffect(() => {
        const getOutlookData = async () => {
            const params = await getSpotsApi.request();
            if (params.data.length === 0) {
                setLoading(false);
                return Alert.alert("No spots yet!", "Go to the Explore page to add spots!");
            }

            const forecast = await getSpotApi.getAllSpotsForecastData(params['data']);
            forecast.forEach((spot) => {
                updatedOutlookData.push(spot['wave_height_max']);
            });

            setOutlookData(updatedOutlookData);
            setLoading(false);
        }

        getOutlookData();
    }, []);
    

    let updatedOutlookData = [];

    const handleModal = () => {
        setModalVisible(!modalVisible);
    }

    const refreshSpots = async () => {
        const spots = await getSpotsApi.request();

        if (!spots) {
            Alert.alert('Error', spots.data.error);
        }

        setSpots(spots.data);
    }

    const handleDelete = async (spot) => {
        const result = await spotsApi.deleteSpot(spot);
        
        if (!result.ok) {
            Alert.alert('Error', result.data.error);
            return deleteSpotFailed(true);
        }

        Alert.alert('Success!', 'Spot removed.');
        deleteSpotFailed(false);
        refreshSpots();
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        updatedOutlookData = [];
        
        const refreshOutlookData = async () => {
            const params = await getSpotsApi.request();
            if (params.data.length === 0) {
                setRefreshing(false);
                return Alert.alert("No spots yet!", "Go to the Explore page to add spots!");
            }

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
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.blue}/>
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
                    { loading ? <ActivityIndicator size='large' color={colors.blue} /> :
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{padding: '5%'}}>
                        {
                            getSpotsApi.data.map((spot, index) =>
                                <AppCard 
                                    key={index}
                                    title={spot.name}
                                    subTitle={spot.description}
                                    image={spot.image}
                                    editable
                                    onPress={() => navigation.navigate('SpotScreen', {spot: spot})}
                                    onDelete={() => handleDelete(spot)}
                                />
                        )}
                        </ScrollView>
                    }
                    </View>
                </View>

                <CardDisplay
                    header={<AppText passedStyle={styles.headerText}>Outlook</AppText>}
                    subHeader={
                        <>
                        {
                            weekDays &&
                            weekDays.map((day, index) => <AppText key={index} passedStyle={styles.secondaryHeaderText}>{day.slice(0, 3)}</AppText>)
                        }
                        </>
                    }
                    
                    cards={
                        loading ? <ActivityIndicator size='large' color={colors.blue} /> :
                        <>
                        {
                            getSpotsApi.data.map((spot, index) => 
                                <OutlookCard 
                                key={index}
                                title={spot.name} 
                                cardDetails={
                                    <>
                                    {
                                        outlookData[index]?.map((data, index) => <AppText key={index} passedStyle={styles.cardDetails}>{data}</AppText>
                                    )}
                                    </>
                                }/>
                            )
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
