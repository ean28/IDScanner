import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/appstyle';

function SettingsScreen() {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>Settings Screen</Text>
      {/* Add your settings options and components here */}
    </View>
  );
}

export default SettingsScreen;
