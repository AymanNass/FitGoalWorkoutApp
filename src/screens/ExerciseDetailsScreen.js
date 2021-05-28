

import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { getExercises } from '../context/WorkoutController'
import Text from '../components/Text'
import TodoList from "../components/ExercisesList";
import { StatusBar } from "expo-status-bar";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { ImageBackground } from 'react-native';

export default function StatsScreen({ navigation, route, Component }) {


    const [ExercisesList, setExercisesList] = useState()
    useEffect(() => {
        getData()
    }, [])

    function getData() {
        getExercises(ExercisesRetrived)
    }

    function ExercisesRetrived(ExercisesList) {
        setExercisesList(ExercisesList)
    }


    return (
        <View style={styles.all}>
            <StatusBar style="light" />
            <View style={styles.container}>
                <StatusBar style="dark" />
                <Text title semi center color='white'>{route.params.name}</Text>
                <Text large semi center color='white'>{route.params.muscleList}</Text>
                <View style={{ height: 10 }} />
                <Image
                    style={{
                        width: '100%',
                        height: '50%',
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: route.params.foto,
                    }}
                />
                <View style={{ height: 30 }} />
                <Text medium semi center color='white'>{route.params.description}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    all: {
        backgroundColor: '#FF2D55',
        height: '100%'
    },
    container: {
        alignItems: 'center',
    },
    listContainer: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginHorizontal: 12,
        marginVertical: 12,
        alignItems: "center",
    },

})