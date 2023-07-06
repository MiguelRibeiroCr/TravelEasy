import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function HomeMap({ navigation  }) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />

      <TouchableHighlight onPress={() => navigation.navigate('CameraMap')}>
        <View style={{
          justifyContent: 'center',
          backgroundColor: '#009688',
          elevation: 5,
          alignItems: 'center',
          height: 60,
          width: 60,
          borderRadius: 100,
          position: 'absolute',
          right: 10,
          bottom: 90,
        }}>
          <Feather name="camera" size={24} color="black" />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});