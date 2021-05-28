import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ExercisesScreen from '../screens/ExercisesScreen'
import ExercisesListScreen from '../screens/ExercisesListScreen'
import StatsScreen from '../screens/StatsScreen'
import ExercisesBackScreen from '../screens/ExercisesBackScreen'
import Workout from '../screens/WorkoutScreen'
import MyWorkout from '../screens/MyWorkout'
import Measurements from '../screens/MisureScreen'
import Aggiungi from '../screens/AddMeasure'
import PlayWorkout from '../screens/PlayWorkout'
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen'
import ExerciseList from '../components/ExercisesList'

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
const MeasurementsScreenNavigator = () => {
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
                    animationEnabled: true,
                    title: '',

                }}
            />
            <Stack.Screen
                name="Aggiungi"
                component={Aggiungi}
                options={{
                    headerShown: true,
                    animationEnabled: true,
                    title: '',

                }}
            />
            <Stack.Screen
                name="Statistiche"
                component={StatsScreen}
                options={{
                    headerShown: true,
                    animationEnabled: true,
                    title: '',

                }}
            />

        </Stack.Navigator>
    )
}

const WorkoutScreenNavigator = () => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#F15152',
                headerStyle: { backgroundColor: '#34344A' },
                backgroundColor: '#34344A',
                headerShown: false

            }}>
            <Stack.Screen
                name="Workout"
                component={Workout}
                screenOptions={{
                    headerTintColor: '#F15152',
                    headerStyle: { backgroundColor: '#34344A' },
                    backgroundColor: '#34344A',
                    headerShown: false
                }}

            />
            <Stack.Screen
                name="MyWorkout"
                component={MyWorkout}
                screenOptions={{
                    headerTintColor: '#F15152',
                    headerStyle: { backgroundColor: '#34344A' },
                    backgroundColor: '#34344A',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PlayWorkout"
                component={PlayWorkout}
                screenOptions={{
                    headerTintColor: '#F15152',
                    headerStyle: { backgroundColor: '#34344A' },
                    backgroundColor: '#34344A',
                    headerShown: false
                }}
            />


        </Stack.Navigator>
    )
}
export { FirstScreenNavigator, MeasurementsScreenNavigator, WorkoutScreenNavigator }
