import React, { useState } from 'react';
import { StatusBar, Dimensions, StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const StartScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>SwellFinder</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => {console.log('hello')}}/>
                <AppButton title="Register"/>
            </View>

            <StatusBar barStyle='dark-content'></StatusBar>
        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
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