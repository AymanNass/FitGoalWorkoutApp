import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Button, FlatList } from 'react-native';
import { StatusBar } from "expo-status-bar";
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import Text from '../components/Text'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { render } from 'react-dom';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Play({ navigation, route }) {

  var docID = route.params.id
  const [isFav, setisFav] = useState()

  var Schedule = {
    "name": route.params.name,
    "pic": route.params.pic,
    "description": route.params.description
  }
  const onFavourite = () => {
    firebase.firestore()
      .collection("Favourites")
      .doc(firebase.auth().currentUser.uid)
      .collection("userFavourites")
      .doc(route.params.id)
      .set(Schedule)
    doesDocExist()

  }
  const onUnFavourite = () => {
    firebase.firestore()
      .collection("Favourites")
      .doc(firebase.auth().currentUser.uid)
      .collection("userFavourites")
      .doc(route.params.id)
      .delete()
    doesDocExist()

  }

  const com = false
  const doesDocExist = () => {
    return firebase.firestore()
      .collection("Favourites")
      .doc(firebase.auth().currentUser.uid)
      .collection("userFavourites")
      .doc(route.params.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setisFav(true)
        } else {
          setisFav(false)
        }
      })
  }
  console.log(isFav)
  doesDocExist()
  return (

    <View style={styles.container}>

      <StatusBar style="dark" />
      <Image
        style={{ width: "100%", height: 240 }}
        source={{ uri: route.params.pic }}
      />
      <View style={styles.title}>
        <Text title semi>{route.params.name}</Text>
        <Text medium light>{route.params.description}</Text>

      </View>


      <TouchableOpacity
        style={styles.playButton}

        //push così aggiorno 
        onPress={() => navigation.push("WorkoutAssistant", { name: route.params.name, id: route.params.id, pic: route.params.pic })}
      >
        <MaterialCommunityIcons name={"play-circle"} size={80} color={"#007AFF"} />
        <Text medium light center>Avvia allenamento</Text>
      </TouchableOpacity>

      <View style={styles.footer}>

        {isFav ? (
          <TouchableOpacity
            //push così aggiorno 
            style={styles.notfavButton}

            onPress={() => onUnFavourite()}
          >
            <Text bold center color="#ffffff">
              Rimuovi dai preferiti
                    </Text>
          </TouchableOpacity>

        ) : (
          <TouchableOpacity
            style={styles.favButton}
            onPress={() => onFavourite()}
          >
            <Text bold center color="#FF2D55">
              Aggiungi ai preferiti
                    </Text>
          </TouchableOpacity>
        )}
      </View>






    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  title: {
    alignItems: 'center',
    marginTop: 10
  },

  footer: {
    marginBottom: 20,
  },
  favButton: {
    marginTop: 20,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "#FF2D55",
    borderRadius: 6,
    borderWidth: 2,
    width: 200
  },
  notfavButton: {
    marginTop: 20,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF2D55",
    borderRadius: 6,
    width: 200

  },
  playButton: {

    alignItems: "center",
    justifyContent: "center",


  }
});

