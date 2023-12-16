import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/appstyle';

function HomeScreen() {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>Home</Text>
    </View>
  );
}

export default HomeScreen;
