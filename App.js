import React from 'react';
import AppNavigator from './src/navigation/AppNav';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
  