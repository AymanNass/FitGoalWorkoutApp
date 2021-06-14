import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { addMeasure } from '../context/MeasureController'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import Text from '../components/Text'
import ignoreWarnings from 'react-native-ignore-warnings';

export default function AddMeasurePage({ navigation, route }) {

  const [name, setName] = useState("")
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  function addMeasurements() {
    var measure = {
      "value": name,
      "date": date,
      "month": month,
      "year": year,
    }

    addMeasure(measure, addComplete, route.params.size)
  }

  function addComplete() {
    navigation.push("Statistiche", { size: route.params.size })
  }



  return (


    <View style={styles.container}>

      <KeyboardAwareScrollView
        enableOnAndroid={true}
        scrollEnabled={true}
        enableAutomaticScroll={true}
        contentContainerStyle={{ paddingTop: 10 }}
        extraScrollHeight={-20}
      >
        <View style={styles.addIt}>
          <Text title semi>{route.params.size}</Text>

          <Text large light>Inserisci il valore</Text>

          <View style={styles.textInputView}>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              placeholder={route.params.size}
              value={name}
              onChangeText={text => setName(text)}
            />
            <TouchableOpacity
              onPress={() => addMeasurements()}
              style={styles.button2}
            >
              <Text style={{ color: "white" }}> Aggiungi </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: "100%"
  },
  textInput: {
    width: 100,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 25,
    margin: 30,
    textAlign: 'center',
  },

  textInputView: {
    alignItems: 'center'
  },
  addIt: {
    alignItems: 'center',
    width: "100%",
  },
  button: {
    alignItems: 'center',
    padding: 6,
    borderRadius: 5,
    width: 100,
    height: 30,
    borderColor: '#007AFF',
    borderWidth: 1
  },
  button2: {
    alignItems: 'center',
    padding: 6,
    borderRadius: 5,
    width: 100,
    height: 30,
    borderColor: '#007AFF',
    borderWidth: 1,
    backgroundColor: '#007AFF',

  },

});

