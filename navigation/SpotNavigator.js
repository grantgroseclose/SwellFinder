import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../config/colors";

import HomeScreen from "../screens/HomeScreen";
import SpotScreen from "../screens/SpotScreen";

const Stack = createNativeStackNavigator();




const SpotNavigator = () => (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '', headerTintColor: colors.light }}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='SpotScreen' component={SpotScreen} />
    </Stack.Navigator>
)




export default SpotNavigator;
