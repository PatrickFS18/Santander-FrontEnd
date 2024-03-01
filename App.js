import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './templates/screen/splashScreen/index';
import Login from './templates/screen/login/index';
import Home from './templates/screen/home';
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
         <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false, // Esconder o cabeçalho
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
