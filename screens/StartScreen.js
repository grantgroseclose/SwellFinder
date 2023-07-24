import React, { useState } from 'react';
import { StatusBar, Dimensions, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const StartScreen = () => {
    return (
        <Screen passedStyle={{justifyContent: 'space-evenly'}}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>SwellFinder</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="Login"/>
                <AppButton title="Register"/>
            </View>

            <StatusBar barStyle='dark-content'></StatusBar>
        </Screen>
    );
    
}

const styles = StyleSheet.create({
  logoContainer: {
    padding: screenWidth * .05,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: 'Inter-Black',
    fontSize: screenHeight * .05,
    fontWeight: 'bold',
    color: colors.white
  },
  buttonsContainer: {
    padding: screenWidth * .05,
    width: '100%'
  }
});

export default StartScreen;
