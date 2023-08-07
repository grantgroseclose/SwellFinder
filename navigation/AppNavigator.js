import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../config/colors";

import AccountScreen from "../screens/AccountScreen";
import SpotNavigator from "./SpotNavigator";
import SpotMapScreen from "../screens/SpotMapScreen";

const Tab = createBottomTabNavigator();




const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: colors.primary,
          borderTopColor: colors.medium
        },
        tabBarActiveTintColor: colors.blue
      }}>
      <Tab.Screen
        name='Home'
        component={SpotNavigator}
        options={{
          tabBarIcon: ({ size, focused }) => <MaterialCommunityIcons name='home' size={size} color={focused ? colors.blue : colors.light } />
        }}
      />
      <Tab.Screen
        name='Explore'
        component={SpotMapScreen}
        options={{
          tabBarIcon: ({ size, focused }) => <MaterialCommunityIcons name='map-marker' size={size} color={focused ? colors.blue : colors.light }/>
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, focused }) => <MaterialCommunityIcons name='account' size={size} color={focused ? colors.blue : colors.light }/>
        }}
      />
    </Tab.Navigator>
)




export default AppNavigator;
