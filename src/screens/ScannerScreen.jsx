import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';

const ScannerScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const takePicture = async camera => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      setImageUri(data.uri);
    }
  };

  const pickImage = () => {
    const options = {
      title: 'Select ID Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setImageUri(response.uri);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {imageUri ? (
        <>
          <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginBottom: 10 }} />
          <Text>Image Loaded</Text>
        </>
      ) : (
        <RNCamera
          style={{ flex: 1, width: '100%' }}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <View />;
            return (
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <TouchableOpacity onPress={() => takePicture(camera)} style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', alignSelf: 'center' }} />
                <TouchableOpacity onPress={pickImage} style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', alignSelf: 'center' }} />
              </View>
            );
          }}
        </RNCamera>
      )}
    </View>
  );
};
export default ScannerScreen;
