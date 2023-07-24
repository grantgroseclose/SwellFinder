import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';




const AppText = ({ passedStyle, children }) => {
    return (
        <Text style={[styles.text, passedStyle]}>{children}</Text>
    );
}




const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: 'white'
    }
})

export default AppText;
