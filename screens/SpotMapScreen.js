import React, { useState } from 'react';
import { Dimensions, StyleSheet, Alert, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';

import spotsApi from '../api/spots';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label('Name'),
    description: Yup.string().required().min(1).label('Description'),
    latitude: Yup.string().required().min(1).label('Latitude'),
    longitude: Yup.string().required().min(1).label('Longitude'),
    image: Yup.string().required()
});




const SpotMapScreen = () => {
    const [marker, setMarker] = useState(null);
    const [setSpot, setSpotFailed] = useState(false);
    const navigation = useNavigation();

    const handleSubmit = async (spot) => {
        const result = await spotsApi.addSpot(spot);
        
        if (!result.ok) {
            Alert.alert('Error', result.data.error);
            return setSpotFailed(true);
        }

        setSpotFailed(false);

        Alert.alert('Success!', 'Spot added!', [
            { text: "Ok", onPress: () => navigation.navigate('Home') },
        ]);
    };


    return (
        <Screen>
            <MapView
            style={styles.map}
            initialRegion={{
                latitude: 29.06,
                longitude: -80.91,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            onPress={(e) => {
                setMarker(e.nativeEvent.coordinate);
            }}
            >
                {marker &&
                    <Marker coordinate={marker}>
                        <Callout tooltip>
                            <AppForm 
                            style={styles.spotCallout}
                            initialValues={{  
                                name: '',
                                description: '', 
                                latitude: '', 
                                longitude: '',
                                image: ''
                            }}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}
                            >
                                <View>
                                    <AppFormField
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    icon="pencil"
                                    name="name"
                                    placeholder="Name"
                                    />

                                    <AppFormField
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    icon='chat-question'
                                    name='description'
                                    placeholder='Description'
                                    />

                                    <AppFormField
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    icon="latitude"
                                    name="latitude"
                                    placeholder={parseFloat(marker.latitude).toFixed(2)}
                                    placeholderTextColor={colors.medium}
                                    />

                                    <AppFormField
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    icon='longitude'
                                    name='longitude'
                                    placeholder={parseFloat(marker.longitude).toFixed(2)}
                                    placeholderTextColor={colors.medium}
                                    />

                                    <FormImagePicker name='image' />
                                </View>

                                <AppSubmitButton title='Add Spot' />
                            </AppForm>
                        </Callout>
                    </Marker>
                }
            </MapView>
        </Screen>
    );
}







const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    spotCallout: {
        width: screenWidth * .8,
        height: screenHeight * .6,
        borderRadius: 15,
        padding: '5%',
        backgroundColor: colors.primary,
        justifyContent: 'space-between'
    }
});


export default SpotMapScreen;

