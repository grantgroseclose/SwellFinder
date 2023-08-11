import React, { useState } from 'react';
import { Dimensions, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';


import spotsApi from '../api/spots';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label('Name'),
    description: Yup.string().required().min(1).label('Description'),
    latitude: Yup.string().required().min(5).label('Latitude'),
    longitude: Yup.string().required().min(5).label('Longitude')
});

const SpotMapScreen = () => {
    const [marker, setMarker] = useState(null);
    const [setSpot, setSpotFailed] = useState(false);

    const handleSubmit = async ({name, description, latitude, longitude}) => {
        const result = await spotsApi.addSpot(name, description, latitude, longitude);
        if (!result.ok) {
            Alert.alert('Error', result.data.error);
            return setSpotFailed(true);
        }
        Alert.alert('Success!', 'Spot added!');
        setSpotFailed(false);
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
            onPress={(e) => setMarker(e.nativeEvent.coordinate)}
            >
                {marker &&
                    <Marker coordinate={marker}>
                        <Callout tooltip>
                            <AppForm 
                            style={styles.spotCallout}
                            initialValues={{  
                                name: '',
                                description: '', 
                                latitude: parseFloat(marker.latitude).toFixed(2), 
                                longitude: parseFloat(marker.longitude).toFixed(2)
                            }}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}
                            >
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
                                />

                                <AppFormField
                                autoCapitalize='none'
                                autoCorrect={false}
                                icon='longitude'
                                name='longitude'
                                placeholder={parseFloat(marker.longitude).toFixed(2)}
                                />

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
        borderRadius: 15,
        padding: '5%',
        backgroundColor: colors.primary
    }
});


export default SpotMapScreen;

