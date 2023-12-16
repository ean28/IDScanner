// src/navigation/AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen';
import ListScreen from '../screens/ListScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Import styles from appstyle.js
import { styles } from '../styles/appstyle';

const Tab = createBottomTabNavigator();

function SettingsButton({ navigation }) {
  return (
    <MaterialCommunityIcons
      name="cog-outline"
      color="#fff"
      size={24}
      style={{ marginRight: 15 }}
      onPress={() => {
        // Navigate to the settings screen
        navigation.navigate('Settings');
      }}
    />
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: styles.tabBarActiveTintColor,
          tabBarInactiveTintColor: styles.tabBarInactiveTintColor,
          tabBarStyle: styles.tabBarStyle,
          headerStyle: styles.headerStyle, // Apply header background color
          headerTintColor: styles.headerTintColor, // Apply header text color
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            title: 'Home',
            headerRight: () => <SettingsButton navigation={navigation} />,
          })}
        />
        <Tab.Screen
          name="Scanner"
          component={ScannerScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
            ),
            title: 'Scanner',
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
            ),
            title: 'List',
          }}
        />
        {/* Settings screen hidden from the bottom tab bar */}
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarButton: () => null }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
