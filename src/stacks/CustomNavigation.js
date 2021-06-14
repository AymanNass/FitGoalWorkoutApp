import React from 'react'
import { Button, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import ExercisesScreen from '../screens/ExercisesScreen'
import ExercisesListScreen from '../screens/ExercisesListScreen'
import StatsScreen from '../screens/StatsScreen'
import ExercisesBackScreen from '../screens/ExercisesBackScreen'
import Workout from '../screens/WorkoutScreen'
import Measurements from '../screens/MisureScreen'
import Aggiungi from '../screens/AddMeasure'
import PlayWorkout from '../screens/PlayWorkout'
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen'
import ExerciseList from '../components/ExercisesList'
import WorkoutAssistant from '../screens/WorkoutAssistant'
import ExercisesExecutionScreen from '../screens/ExercisesExecutionScreen'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator()

const FirstScreenNavigator = () => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#FF2D55',
                headerStyle: { backgroundColor: '#F2F2F7' },
            }}>
            <Stack.Screen
                name="Exercises"
                component={ExercisesScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false,
                    title: 'Esercizi',
                    headerLeft: null

                }}
            />
            <Stack.Screen
                name="ExercisesBack"
                component={ExercisesBackScreen}

                options={{
                    headerShown: false,
                    animationEnabled: false,
                    title: 'Esercizi',
                    headerLeft: null
                }}

            />
            <Stack.Screen
                name="ExercisesListScreen"
                component={ExercisesListScreen}
                options={{
                    headerShown: true,
                    animationEnabled: true,
                    title: '',
                }}
            />
            <Stack.Screen
                name="ExerciseDetailsScreen"
                component={ExerciseDetailsScreen}
                options={{
                    headerShown: true,
                    animationEnabled: false,
                    headerTintColor: 'white',
                    title: '',
                    headerBackTitle: 'Indietro',
                    headerStyle: {
                        backgroundColor: '#FF2D55',
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                    },
                }}
            />
            <Stack.Screen
                name="ExerciseList"
                component={ExerciseList}
                options={{
                    headerShown: true,
                    animationEnabled: true,
                    title: '',

                }}
            />


        </Stack.Navigator>
    )
}
const MeasurementsScreenNavigator = ({ navigation }) => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#FF2D55',
                headerStyle: { backgroundColor: '#F2F2F7' },

            }}>
            <Stack.Screen
                name="Misure"
                component={Measurements}
                options={{
                    headerShown: false,
                    animationEnabled: false,
                    title: '',

                }}

            />
            <Stack.Screen
                name="Aggiungi"
                component={Aggiungi}
                options={{
                    headerShown: true,
                    animationEnabled: false,
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.push("Misure")}
                        >
                            <MaterialCommunityIcons style={{ paddingLeft: 10 }} name="arrow-left" size={26} color="black" />
                        </TouchableOpacity>)

                }}

            />
            <Stack.Screen
                name="Statistiche"
                component={StatsScreen}

                options={{
                    headerShown: true,
                    animationEnabled: false,
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.push("Misure")}
                        >
                            <MaterialCommunityIcons style={{ paddingLeft: 10 }} name="arrow-left" size={26} color="black" />
                        </TouchableOpacity>)
                }}

            />

        </Stack.Navigator>
    )
}

const WorkoutScreenNavigator = ({ navigation }) => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#FF2D55',
                headerStyle: { backgroundColor: '#F2F2F7' },

            }}>

            <Stack.Screen
                name="Workout"
                component={Workout}
                options={{
                    headerShown: false,
                    title: '',
                    gestureEnabled: false
                }}


            />

            <Stack.Screen
                name="WorkoutAssistant"
                component={WorkoutAssistant}

                options={{
                    headerShown: false,
                    title: 'Start',
                    gestureEnabled: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.push("Workout")}
                        >
                            <MaterialCommunityIcons style={{ paddingLeft: 10 }} name="arrow-left" size={26} color="black" />
                        </TouchableOpacity>
                    ),

                }}
            />
            <Stack.Screen
                name="PlayWorkout"
                component={PlayWorkout}
                options={{
                    headerShown: true,
                    title: '',
                    gestureEnabled: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.push("Workout")}
                        >
                            <MaterialCommunityIcons style={{ paddingLeft: 10 }} name="arrow-left" size={26} color="black" />
                        </TouchableOpacity>
                    ),

                }}

            />
            <Stack.Screen
                name="ExercisesExecutionScreen"
                component={ExercisesExecutionScreen}
                options={{
                    headerShown: true,
                    animationEnabled: false,
                    headerTintColor: 'white',
                    title: '',
                    headerBackTitle: 'Indietro',
                    headerStyle: {
                        backgroundColor: '#FF2D55',
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                    },
                }}
            />


        </Stack.Navigator>
    )
}
export { FirstScreenNavigator, MeasurementsScreenNavigator, WorkoutScreenNavigator }
