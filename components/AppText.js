import React from 'react';
import { Text, StyleSheet } from 'react-native';




const AppText = ({ passedStyle, children }) => {
    return (
        <Text style={[styles.text, passedStyle]}>{children}</Text>
    );
}




const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        color: 'white'
    }
})

export default AppText;
