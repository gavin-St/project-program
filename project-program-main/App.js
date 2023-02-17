import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavBar from './src/components/navbar';

const Stack = createNativeStackNavigator();

 export default function App() {
  return (
    <SafeAreaProvider>
      <NavBar />
    </SafeAreaProvider>
  );
}