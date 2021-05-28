import React, { useState,useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Animated, Button, CheckBox} from 'react-native';
import {addWorkout, getWorkoutSchedule, getWorkoutScheduleName} from '../context/WorkoutController'
import { StatusBar } from "expo-status-bar";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import styled from 'styled-components'
import Text from '../components/Text'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function AddMeasurePage({ navigation, route }) {


    const [WorkoutList, setWorkoutList] = useState()
        useEffect(()=> {
          getData()
      }, [])

      function getData(){
        getWorkoutSchedule(WorkoutRetrived,route.params.id)
      }

      function WorkoutRetrived(WorkoutList){
        setWorkoutList(WorkoutList)
      }

      //variabile timer
      const [isPlaying, setIsPlaying] = React.useState(false)

      //Variable checkbox
      const [isSelected, setSelection] = useState(false);

      const views = [];
      function NumOfExercises(){
        for (let i = 0; i < 1; i++) {
          views.push(
                  <Text>{"name"}</Text>
          );
        }
        return views
        
      }
     
  return (

  <View style={styles.container}>
   
      
    <StatusBar style="light"/>
        
      <View style={styles.addIt}>
        <Text title bold>{route.params.name}</Text>
         
        <FlatList       
            style={styles.flatList}
            data = {WorkoutList}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
                        <View>
                             <BouncyCheckbox
                              size={25}
                              fillColor="red"
                              unfillColor="#FFFFFF"
                              text={item.value}
                              onPress={()=>setIsPlaying(prev => !prev)}
                              iconStyle={{ borderColor: "red" }}
                              textStyle={{ fontSize: 30}}
                            /> 
                            <Text>
                              <Text large light>{item.name}</Text>
                              <Text large light>{item.series} x</Text>
                              <Text large light>{item.reps}</Text>
                            </Text>
                          
                           

                        </View> }
                    />
                          <CountdownCircleTimer
                            isPlaying={isPlaying}
                            duration={2}
                            strokeWidth={3}
                            size={50}
                            colors={[
                            ['#DB504A', 0.4],
                            ['#DB504A', 0.4],
                            ['#DB504A', 0.2],
                            ]}
                            onComplete={() => [true]}
                        >
                        {({ remainingTime, animatedColor }) => (
                            <Animated.Text style={{ color: animatedColor,  fontSize: 20 }}>
                            {remainingTime}
                            </Animated.Text>
                        )}
                        </CountdownCircleTimer>
                        <Button title="Completato" onPress={() => setIsPlaying(prev => !prev)}/>

      </View>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("MyWorkout")}
                        style={styles.button}
                    >       
                        <Text style={{ color: "#F15152"  }}> Aggiungi </Text>
                    </TouchableOpacity>  
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

