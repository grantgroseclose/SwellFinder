import React, { useState } from 'react';
import { StatusBar, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';




export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <AppNavigator />
      <StatusBar barStyle='dark-content'></StatusBar>
    </NavigationContainer>

    // <SpotScreen />
  );
}




const styles = StyleSheet.create({
  
});
