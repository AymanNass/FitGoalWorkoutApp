import React, { isValidElement } from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import ListItem from "../context/Listitem";
import Text from './Text'

export default ExercisesList = ({ list, navigation }) => {


    const pic = list.foto;
    return (
        <Card style={{ margin: 10, backgroundColor: '#212121', borderRadius: 30 }} isDark={true}>
            <CardTitle
                subtitleAbove={false}
                title={list.name}
                subtitle={list.muscleList}
            />
            <CardImage
                source={{ uri: pic }}
            />
            <CardContent
                text={list.description}
            />
            <CardAction separator={true} inColumn={false}>
                <CardButton
                    onPress={() => { navigation.navigate("ExerciseDetailsScreen", { size: 'Peso', }) }}
                    title="Dettagli"
                />

            </CardAction>
        </Card>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginHorizontal: 12,
        marginVertical: 12,
        alignItems: "center",
    },
    logo: {
        marginTop: 20,
        marginBottom: 20,
        width: 250,
        height: 250,
    },
});
