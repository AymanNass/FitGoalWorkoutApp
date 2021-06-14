
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { getFavourites, getWorkoutScheduleName } from '../context/WorkoutController'
import { StatusBar } from "expo-status-bar";
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import styled from 'styled-components'
import Text from '../components/Text'
import ImagedCarouselCard from "react-native-imaged-carousel-card";


export default function WorkoutScreen({ navigation, route }) {
  const [WorkoutList, setWorkoutList] = useState()
  const [FavList, setFavList] = useState()
  const [IsFav, setIsFav] = useState()

  useEffect(() => {
    getData()
    getDataFav()
  }, [])

  function getData() {
    getWorkoutScheduleName(WorkoutRetrived)
  }

  function WorkoutRetrived(WorkoutList) {
    setWorkoutList(WorkoutList)
  }

  function getDataFav() {
    getFavourites(FavRetrieved)
  }

  function FavRetrieved(FavList) {
    setFavList(FavList)
  }

  return (

    <Container>
      <TitleContainer>
        <Text title light>Workout</Text>
      </TitleContainer>
      <SectionContainer>
        <Text medium bold color="#FF2D55">Preferiti</Text>
      </SectionContainer>


      <StatusBar style="dark" />
      <FlatList style={styles.flatList}
        data={FavList}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.push("PlayWorkout", { name: item.name, id: item.id, pic: item.pic, description: item.description })}>
            <CardContainer>
              <ImagedCarouselCard
                width={200}
                height={200}
                shadowColor="#FF2D55"
                text={item.name}
                overlayBorderBottomRightRadius={35}
                overlayBorderBottomLeftRadius={35}
                source={{
                  uri: item.pic,
                }}
                borderRadius={30}

              /></CardContainer>
          </TouchableOpacity>
        }
      />
      <SectionContainer>
        <Text medium bold color="#007AFF">Workout</Text>
      </SectionContainer>
      <FlatList style={styles.flatList}
        data={WorkoutList}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.push("PlayWorkout", { name: item.name, id: item.id, pic: item.pic, description: item.description })}>
            <CardContainer>
              <ImagedCarouselCard
                width={200}
                height={200}
                shadowColor="#007AFF"
                text={item.name}
                overlayBorderBottomRightRadius={35}
                overlayBorderBottomLeftRadius={35}
                source={{
                  uri: item.pic,
                }}
                borderRadius={30}

              /></CardContainer>
          </TouchableOpacity>
        }
      />
    </Container>
  );
}

const styles = StyleSheet.create({



});


const Container = styled.View`
    margin-top: 50px;
    flex: 1;
`;
const CardContainer = styled.View`
    padding: 10px;
    margin-top: 0px;
    alignItems: center;
`;

const TitleContainer = styled.View`
    marginLeft: 15px;

`;

const SectionContainer = styled.View`
    marginLeft: 25px;
    marginTop:20px;

`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
    align-items: center;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const LogoutContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #FF2D55;
    border-radius: 6px;
`;



const SignUp = styled.TouchableOpacity`
    margin-top: 16px;
`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
    background-color: #FF2D55;
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 300px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #FF2D55;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

