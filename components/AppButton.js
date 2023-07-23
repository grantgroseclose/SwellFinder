import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import colors from '../config/colors'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const AppButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}




const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.button,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: screenHeight * .02
    },
    text: {
        color: colors.black,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton;