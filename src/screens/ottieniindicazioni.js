import React, {Component} from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';
import getDirections from 'react-native-google-maps-directions'
import MapView, {Marker} from 'react-native-maps';


export default class gmapsDirections extends Component {

    handleGetDirections = (lat, long) => {
      const data = {
        
        destination: {
            latitude: lat, 
            longitude: long,
        },
        params: [
          {
            key: "travelmode",
            value: "driving"        // may be "walking", "bicycling" or "transit" as well
          },
          
        ],
        waypoints: [
            
             
          
             
        ]
      }
  
      getDirections(data)
    }
  
    render() {
      return (
        <View >
          <Button onPress={this.handleGetDirections("45.401911350364884", "9.142226450784957")} title="Get Directions" />
        </View>
      );
    }
  }


  