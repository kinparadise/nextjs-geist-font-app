"use client";

import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appearance, useColorScheme } from 'react-native';

import { LightTheme, CustomDarkTheme } from './theme';

// Import screens (to be created)
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import PreJoinScreen from './screens/PreJoinScreen';
import PresentationView from './screens/PresentationView';
import TiledView from './screens/TiledView';
import HostToolsScreen from './screens/HostToolsScreen';
import WaitingRoomScreen from './screens/WaitingRoomScreen';
import ExperimentalFeaturesScreen from './screens/ExperimentalFeaturesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme === 'dark' ? CustomDarkTheme : LightTheme);

  useEffect(() => {
    setTheme(colorScheme === 'dark' ? CustomDarkTheme : LightTheme);
  }, [colorScheme]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PreJoin" component={PreJoinScreen} />
        <Stack.Screen name="PresentationView" component={PresentationView} />
        <Stack.Screen name="TiledView" component={TiledView} />
        <Stack.Screen name="HostTools" component={HostToolsScreen} />
        <Stack.Screen name="WaitingRoom" component={WaitingRoomScreen} />
        <Stack.Screen name="ExperimentalFeatures" component={ExperimentalFeaturesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
