import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../screens/ProfileScreen"
import TestScreen from "../screens/WorkoutScreen"
import ProgressesScreen from "../screens/MapPoints"
import { FirstScreenNavigator, MeasurementsScreenNavigator, WorkoutScreenNavigator } from '../stacks/CustomNavigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default MainStackScreens = () => {
    const MainStack = createBottomTabNavigator()
    const Stack = createStackNavigator();

    const tabBarOptions = {
        activeTintColor: "#FF2D55",
        inactiveTintColor: "#48484A",
        labelStyle: {
            fontFamily: 'Verdana',
            fontSize: 12,
        },
        showLabel: true,
        style: {
            height: 100,
            backgroundColor: "#F2F2F7",
            paddingBottom: 30,
        }
    }

    const screenOptions = (({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName = "dumbbell";
            switch (route.name) {
                case "Esercizi":
                    iconName = "dumbbell";
                    break;
                case "Misure":
                    iconName = "tape-measure";
                    break;
                case "Mappa":
                    iconName = "google-maps";
                    break;
                case "Profilo":
                    iconName = "account";
                    break;

                default:
                    iconName = "dumbbell"
            }
            if (route.name === "Workout") {
                return (
                    <MaterialCommunityIcons
                        name="play-circle"
                        size={40}
                        color={focused ? "#FF2D55" : "#48484A"}
                        style={{ shadowColor: "#34344A", shadowOffset: { width: 0, height: 0 }, shadowColor: "#FF2D55", shadowRadius: 8, shadowOpacity: 0.3 }}
                    />
                )
            }

            return <MaterialCommunityIcons name={iconName} size={24} color={focused ? "#FF2D55" : "#48484A"} />;
        }

    }))
    return (
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name="Esercizi" component={FirstScreenNavigator} />
            <MainStack.Screen name="Misure" component={MeasurementsScreenNavigator} />
            <MainStack.Screen name="Workout" component={WorkoutScreenNavigator} />
            <MainStack.Screen name="Mappa" component={ProgressesScreen} />
            <MainStack.Screen name="Profilo" component={ProfileScreen} />
        </MainStack.Navigator>
    )

}