import React from 'react'
import { View, CheckBox, ImageBackground, StyleSheet } from 'react-native'
import MarkerLeft from '../components/MarkerLeft'
import MarkerRight from '../components/MarkerRight'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from "expo-status-bar";
import Text from '../components/Text'

export default function Exercises({ navigation }) {

  return (
    <View style={styles.container}>
      <Text title light>Esercizi</Text>
      <View style={styles.body}>
        <StatusBar style="dark" />
        <ImageBackground style={{ flex: 1 }} source={require('../../assets/body.png')} resizeMode={'stretch'} style={{ width: 200, height: 500 }} >
          <MarkerLeft text={'Spalle'} onPress={() => navigation.navigate("ExercisesListScreen", { muscle: 'Spalle', })} top={'21%'} left={'80%'} />
          <MarkerLeft text={'Bicipiti'} onPress={() => navigation.navigate("ExercisesListScreen", { muscle: 'Bicipiti', })} top={'34%'} left={'78%'} />
          <MarkerRight text={'Petto'} onPress={() => navigation.navigate("ExercisesListScreen", { muscle: 'Petto', })} top={'24%'} left={'11%'} />
          <MarkerRight text={'Quadricipiti'} onPress={() => navigation.navigate("ExercisesListScreen", { muscle: 'Quadricipiti', })} top={'62%'} left={'-8%'} />
        </ImageBackground>
        <MaterialCommunityIcons
          onPress={() => navigation.navigate("ExercisesBack", { size: 'Peso', })}
          name={"rotate-left"}
          size={50}
          color={"#FF2D55"} />
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