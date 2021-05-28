import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import {addWorkout} from '../context/WorkoutController'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import styled from 'styled-components'
import Text from '../components/Text'
export default function AddMeasurePage({ navigation, route }) {

    const [name, setName] = useState("")
    const [day, setDay] = useState("")


    function addMyWorkout(){
        var measure = {
            "value" : name,
            "createdAt": firebase.firestore.FieldValue.serverTimestamp(),

        }

        addWorkout(measure, addComplete, name, day)

    
    }

    function addComplete(){
    }



  return (


    <View style={styles.container}>
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            scrollEnabled={true}
            enableAutomaticScroll={true}
            contentContainerStyle={{paddingTop : 10}}
            extraScrollHeight = {-20}
            >      
        <View style={styles.addIt}>
        <Text title bold>WORKOUT</Text>

            <Text large semi>Inserisci il nome del workout</Text>

            <View style={styles.textInputView}>
                <TextInput  style={styles.textInput} 
                            placeholder="nome"
                            value={name}
                            onChangeText={text => setName(text)}
                            />
                <TextInput  style={styles.textInput} 
                            placeholder="nome"
                            value={day}
                            onChangeText={text => setDay(text)}
                            />
                
                <TouchableOpacity
                    onPress={() => addMyWorkout()}                        
                    style={styles.button2}
                    >       
                        <Text style={{ color: "#F15152" }}> Aggiungi </Text>
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
    width : "100%"
  },
  textInput: {
      width : 300,
      height: 50,
      borderWidth: 1.5,
      borderRadius : 10,
      margin : 20,
      textAlign : 'center',
  },

textInputView : {
    alignItems : 'center'
},
addDanceView : {
    borderWidth: 3,
    borderRadius : 30,
    width: "100%" ,
    // marginTop : 100,
    padding : 5,
    paddingBottom : 20,
    alignItems : 'center'
  },
  footer : {
    marginBottom : -10,
    width : "100%"
  },
  addIt : {
      alignItems : 'center',
      padding: 20,
      width : "100%",
      marginTop : 30
  },
  button: {
    alignItems: 'center',
    padding: 6,
    borderRadius:5,
    width: 100,
    height: 30,
    borderColor: '#F15152',
    borderWidth: 1
  },
  button2: {
    alignItems: 'center',
    padding: 6,
    borderRadius:5,
    width: 100,
    height: 30,
    borderColor: '#F15152',
    borderWidth: 1
  },
});

