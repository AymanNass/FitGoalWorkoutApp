import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Text from "../components/Text"
//createdAt mi fa troppe letture????
// <Text style= {styles.text}>{props.item.createdAt.toDate().getDate()+"/"}</Text>
//<Text style= {styles.text}>{props.item.createdAt.toDate().getMonth()+1+"/"}</Text>
//<Text style= {styles.text}>{props.item.createdAt.toDate().getFullYear()}</Text></Text>
const ListItem = props => {
    
    const content = (
    <View style={styles.content}>
       
        <View style= {styles.textView} >
        <Text>
            <Text medium semi>{props.item.value+" il giorno"}</Text>
            <Text medium semi>{props.item.date+" /"}</Text>
            <Text medium semi>{props.item.month+" /"}</Text>
            <Text medium semi>{props.item.year+""}</Text>

        </Text>
        </View>
        <View style={styles.imageView}>
        </View>
    </View>
    )

    return <TouchableOpacity>{content}</TouchableOpacity>
    
};



const styles = StyleSheet.create({
    content : {
        padding : 5,
        flexDirection: 'row',
        justifyContent : "space-between",
    },
    textView : {
        justifyContent : 'center'
    },
    text: {
        color: "black"
    },

});

export default ListItem; 