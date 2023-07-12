import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Image } from "expo-image"
import TouristSpotEntity from "../entities/tourist_spot_entity";
import { Feather } from '@expo/vector-icons';


export default function HomeMap({ navigation  }) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} >
           

            {TouristSpotEntity.map((spot, index) => (
                <Marker
                    key={index}
                    coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
                    title={spot.nome}
                    onPress={() => handleMarkerPress(spot)}
                >
                    <View style={styles.markerContainer}>
                        <TouchableOpacity onPress={openModal}>
                            <Image
                                source={spot.imagem}
                                style={styles.markerImage}
                            />
                        </TouchableOpacity>
                    </View>
                </Marker>
            ))}
        </MapView>

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
  markerContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth:3,
    borderColor:'black',
  },
  markerImage: {
    width: '100%',
    height: '100%',
  }
});