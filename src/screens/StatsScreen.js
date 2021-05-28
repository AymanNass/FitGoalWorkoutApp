import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { getMeasures } from '../context/MeasureController'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Text from '../components/Text'

export default function StatsScreen({ navigation, route }) {

    const [MeasuresList, setMeasuresList] = useState()


    useEffect(() => {
        getData()
    }, [])

    function getData() {
        getMeasures(MeasuresRetrived, route.params.size)
    }

    function MeasuresRetrived(MeasuresList) {
        setMeasuresList(MeasuresList)
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
                        <Text large semi center>{item.value + " " + route.params.unity + ""}</Text>
                        <Text medium light center>{item.date + "/" + item.month + "/" + item.year}</Text>
                    </View>}
            />
            <View style={styles.content}>
                <MaterialCommunityIcons
                    onPress={() => navigation.navigate("Aggiungi", { size: route.params.size })}
                    name={"plus-circle-outline"}
                    size={50}
                    color={"#F15152"} />
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
})