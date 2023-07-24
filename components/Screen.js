import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import colors from '../config/colors'




const Screen = ({ passedStyle, children }) => {
    return <SafeAreaView style={[styles.screen, passedStyle]}>{children}</SafeAreaView>
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Screen;
