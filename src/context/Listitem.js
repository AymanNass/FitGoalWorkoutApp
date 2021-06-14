import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Text from "../components/Text"
const ListItem = props => {

    const content = (
        <View style={styles.content}>

            <View style={styles.textView} >
                <Text>
                    <Text medium semi>{props.item.value + " il giorno"}</Text>
                    <Text medium semi>{props.item.date + " /"}</Text>
                    <Text medium semi>{props.item.month + " /"}</Text>
                    <Text medium semi>{props.item.year + ""}</Text>

                </Text>
            </View>
            <View style={styles.imageView}>
            </View>
        </View>
    )

    return <TouchableOpacity>{content}</TouchableOpacity>

};



const styles = StyleSheet.create({
    content: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    textView: {
        justifyContent: 'center'
    },
    text: {
        color: "black"
    },

});

export default ListItem;