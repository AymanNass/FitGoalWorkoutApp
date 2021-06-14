import React, { useState, useEffect } from 'react';
import { getMeasures } from '../context/MeasureController'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, View, FlatList, TouchableOpacity, Animated, Alert } from 'react-native';
import Text from '../components/Text'
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"

export default function StatsScreen({ navigation, route }) {

    const [MeasuresList, setMeasuresList] = useState()


    useEffect(() => {
        getData()
        onDelete()
    }, [])

    function getData() {
        getMeasures(MeasuresRetrived, route.params.size)
    }

    function MeasuresRetrived(MeasuresList) {
        setMeasuresList(MeasuresList)
    }
    const onDelete = (sizeId) => {
        firebase.firestore()
            .collection("Measures")
            .doc(firebase.auth().currentUser.uid)
            .collection(route.params.size)
            .doc(sizeId)
            .delete()
    }

    const createThreeButtonAlert = (item) =>
        Alert.alert(
            "Elimina",
            "Sei sicuro di voler eliminare la misura?",
            [

                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => { onDelete(item), navigation.push("Statistiche", { size: route.params.size }) }, }
            ]
        );

    var unita;
    if (route.params.size === 'Peso') {
        unita = "Kg"
    } else {
        unita = "cm"
    }
    return (

        <View style={styles.content}>
            <Text title light center>{route.params.size}</Text>
            <View style={{ height: 20 }} />
            <FlatList style={styles.flatList}
                data={MeasuresList}
                keyExtractor={(item) => item.id}
                style={{ transform: [{ scaleY: -1 }] }}
                renderItem={({ item }) =>
                    <View style={{
                        transform: [{ scaleY: -1 }],
                        marginTop: 15,
                    }}>
                        <View style={styles.size}>
                            <Text large light >{item.date + "/" + item.month + "/" + item.year}</Text>
                            <View style={styles.singleSize}><Text large semi center>{item.value + " " + unita + ""}</Text></View>
                            <View style={styles.singleSize}><MaterialCommunityIcons
                                onPress={() => createThreeButtonAlert(item.id)}
                                name={"trash-can-outline"}
                                size={30}
                                color={"#FF2D55"} /></View>
                        </View>
                    </View>}
            />
            <View>
                <MaterialCommunityIcons
                    onPress={() => navigation.push("Aggiungi", { size: route.params.size })}
                    name={"plus-circle-outline"}
                    size={50}
                    color={"#007AFF"} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    content: {
        alignItems: 'center',

    },
    bottomContainer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor: 'green',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
    },
    size: {
        alignItems: "center",
        flexDirection: "row",
    },
    singleSize: {
        marginLeft: 30,
    }
})