import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './templates/splashScreen';
import Login from './templates/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false, // Esconder o cabeçalho
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false, // Esconder o cabeçalho

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
