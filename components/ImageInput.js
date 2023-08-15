import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Text
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";




const ImageInput = ({ imageUri, onChangeImage }) => {
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) Alert.alert('Unauthorized', 'Enable permissions in your device settings to access library.');
    };

    const handlePress = () => {
        if (!imageUri) { 
            selectImage();
        }
        else {
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" },
            ]);
        }
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.canceled) { 
                onChangeImage(result['assets'][0]['uri']); 
            }
        } catch (error) {
            Alert.alert('Error', 'Error reading image. Please try again or select a different image.');
        }
    };




    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                color={colors.medium}
                name="image-edit"
                size={20}
                style={styles.icon}
                />
                {imageUri && <Text style={styles.text}>Image</Text>}
            </View>
        </TouchableWithoutFeedback>
    );
}
















const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    width: '90%',
    fontSize: 18,
    fontFamily: 'Avenir',
    color: colors.medium
  }
});




export default ImageInput;

