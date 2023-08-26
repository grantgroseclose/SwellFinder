import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import colors from "../config/colors";

const screenHeight = Dimensions.get('window').height;




const ModalListItem = ({spot, onPress}) => {
    const navigation = useNavigation();
    const closeAndNavigate = () => {
        onPress();
        navigation.navigate('SpotScreen', {spot: spot});
    }

    return (
        <TouchableOpacity style={styles.button} onPress={() => closeAndNavigate()}>
            <AppText passedStyle={styles.textStyle}>{spot['name']}</AppText>
        </TouchableOpacity>
    );
}






const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        height: screenHeight * .05,
        borderRadius: 10,
        padding: 10,
        marginVertical: screenHeight * .005,
        elevation: 2,
        alignItems: 'flex-start'
    },
    textStyle: {
      color: colors.white,
      fontFamily: 'Inter-Bold',
      textAlign: 'center',
    }
});



export default ModalListItem;

