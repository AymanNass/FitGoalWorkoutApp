import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
    <MapView style={styles.map}
      minZoomLevel={5}  // default => 0
      maxZoomLevel={17} // default => 20
      initialRegion={{
          latitude: 45.441,
          longitude: 9.4324,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
      }}
    > 
    <MapView.Marker
        coordinate={{
            latitude: 45.441831,
            longitude: 9.190771}}
            onCalloutPress={() => alert('Clicked')}
        title={"Morivone"}
        description={"Parco Calisthenics"}
        image={require('../../assets/map_marker_Cali.png')}

     />
     <MapView.Marker
        coordinate={{
            latitude: 45.37971845014503,
            longitude: 9.165850327004392}}
        title={"Fit Express"}
        description={"Palestra"}
        image={require('../../assets/map_marker_gym.png')}

     />
     <MapView.Marker
        coordinate={{
            latitude: 45.401911350364884, 
            longitude: 9.142226450784957,}}
        title={"Area Multisport Forum"}
        description={"Palestra"}
        image={require('../../assets/map_marker_gym.png')}

     />
  </MapView>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});