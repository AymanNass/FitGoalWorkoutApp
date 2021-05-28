

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { getExercises } from '../context/WorkoutController'
import Text from '../components/Text'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from "expo-status-bar";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default function StatsScreen({ navigation, route }) {

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
    //<Text title semi center color="#FF2D55">{route.params.muscle}</Text>
    22
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <FlatList style={styles.flatList}
                horizontal={false}
                data={Array.isArray(ExercisesList) && ExercisesList?.filter(item => item.muscle === route.params.muscle)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <Card style={{ margin: 10, backgroundColor: '#FF2D55', borderRadius: 30 }} isDark={true}>
                        <CardTitle
                            subtitleAbove={false}
                            title={item.name}
                            subtitle={item.muscleList}
                        />
                        <CardImage
                            source={{ uri: item.foto }}
                            resizeMode='center'
                            style={{ backgroundColor: 'white' }}
                        />
                        <CardContent
                            text={item.description}
                        />
                        <CardAction separator={true} inColumn={false} style={styles.logo}>
                            <CardButton
                                onPress={() => { navigation.navigate("ExerciseDetailsScreen", { name: item.name, muscleList: item.muscleList, foto: item.foto, description: item.description, muscle: route.params.muscle }) }}
                                title="ESPANDI"
                                color='#FF2D55'

                            />

                        </CardAction>
                    </Card>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({


    flatList: {
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40,
        borderRadius: 20,
        margin: 5,
    },

    container: {
        marginTop: 10,
        justifyContent: 'center',
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
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
})