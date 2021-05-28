import React, { useState,useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import {addWorkout, addWorkoutExercise, getWorkoutSchedule, getWorkoutScheduleName} from '../context/WorkoutController'
import { StatusBar } from "expo-status-bar";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import styled from 'styled-components'
import Text from '../components/Text'
export default function AddMeasurePage({ navigation, route }) {

    const [WorkoutList, setWorkoutList] = useState()


    function addMyWorkout(){
        var exercise1 = {
          "value" : "Panca piana",
          "series" : "3",
          "reps": "10",
        }
        var exercise2 = {
            "value" : "Curl Manubri",
            "series" : "3",
            "reps": "10",
        }
        var exercise3 = {
            "value" : "Lateral raise",
            "series" : "3",
            "reps": "10",
        }
        addWorkoutExercise(exercise1, addComplete)
        addWorkoutExercise(exercise2, addComplete)
        addWorkoutExercise(exercise3, addComplete)
//        addWorkoutExercise(exercise2, addComplete, )
    
    }

    function addComplete(){
    }
        useEffect(()=> {
          getData()
      }, [])

      function getData(){
        getWorkoutSchedule(WorkoutRetrived)
      }

      function WorkoutRetrived(WorkoutList){
        setWorkoutList(WorkoutList)
      }

      
    

  return (

  <View style={styles.container}>
    <StatusBar style="dark"/>
        <View
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
              
                
                <TouchableOpacity
                    onPress={() => addMyWorkout()}                        
                    style={styles.button2}
                    >       
                        <Text style={{ color: "#F15152" }}> Aggiungi </Text>
                    </TouchableOpacity>  
        </View>
      </View>
     
    </View>
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

