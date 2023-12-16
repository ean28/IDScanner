import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/appstyle';

function ListScreen() {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>List Screen</Text>
      {/* Add your list component here */}
    </View>
  );
}

export default ListScreen;
