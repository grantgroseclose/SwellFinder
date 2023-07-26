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
import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';
import SpotScreen from './screens/SpotScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerTransparent: true, title: '', headerTintColor: colors.light }}>
    <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="SpotScreen" component={SpotScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerTransparent: true, headerTintColor: colors.light }}>
    <Tab.Screen name='Home' component={StackNavigator} />
    <Tab.Screen name='Account' component={StackNavigator} />
  </Tab.Navigator>
);




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
    // <NavigationContainer>
    //   <StackNavigator />
    //   <StatusBar barStyle='dark-content'></StatusBar>
    // </NavigationContainer>

    <SpotScreen />
  );
}




const styles = StyleSheet.create({
  
});
