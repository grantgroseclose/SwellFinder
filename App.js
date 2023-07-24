import React, { useState } from 'react';
import { StatusBar, Dimensions, StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import colors from './config/colors'
import AppText from './components/AppText'
import AppButton from './components/AppButton';

import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();




const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);




export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <NavigationContainer>
    //   <StackNavigator />
    //   <StatusBar barStyle='dark-content'></StatusBar>
    // </NavigationContainer>

    <RegisterScreen/>
  );
}




const styles = StyleSheet.create({
  
});
