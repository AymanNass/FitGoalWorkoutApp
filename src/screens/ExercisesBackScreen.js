import React from 'react'
import { View, CheckBox, ImageBackground, StyleSheet } from 'react-native'
import MarkerLeft from '../components/MarkerLeft'
import MarkerRight from '../components/MarkerRight'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from "expo-status-bar";
import Text from '../components/Text'

export default function ExercisesBack({ navigation }) {

  return (
    <View style={styles.container}>
      <Text title light>Esercizi</Text>
      <View style={styles.body}>
        <StatusBar style="dark" />
        <ImageBackground style={{ flex: 1 }} source={require('../../assets/body-2.png')} resizeMode={'stretch'} style={{ width: 200, height: 500 }} >
          <MarkerLeft text={'dorsali'} onPress={() => navigation.navigate("ExercisesListScreen", { muscle: 'Dorsali', })} top={'30%'} left={'60%'} />
          <MarkerRight text={'tricipiti'} onPress={() => navigation.navigate("ExercisesListScreen", { muscle: 'Tricipiti', })} top={'31%'} left={'-12%'} />
          <MarkerLeft text={'femorali'} onPress={() => navigation.navigate("ExercisesListScreen", { muscle: 'Femorali', })} top={'62%'} left={'60%'} />
          <MarkerRight text={'polpacci'} onPress={() => navigation.navigate("ExercisesListScreen", { muscle: 'Polpacci', })} top={'78%'} left={'2%'} />
        </ImageBackground>
        <View style={styles.body}>

          <MaterialCommunityIcons
            onPress={() => navigation.navigate("Exercises", { size: 'Peso', })}
            name={"rotate-left"}
            size={30}
            color={"#007AFF"} />
          <Text small light>Ruota</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 15,
    justifyContent: 'center',
  },
  body: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});