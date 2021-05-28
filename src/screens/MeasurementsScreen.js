import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import config from '../config/firebase'
import { Input } from 'react-native-elements/dist/input/Input'

export default function MeasurementsScreen() {

    const [input, setInput] = useState("");
    const db = firebase.firestore();
  
    const createEx = async() => {
        await db.collection("chat")
        .doc(firebase.auth().currentUser.uid)
        .collection("userroutine")
        .doc(input)
        .collection("userexercises")
        .add({
            chatName: input,
        })
        .catch((error) => alert(error));
    }

    return (
        <View>
            <Text>Measyrem</Text>
            <Input
            value={input}
            onChangeText= {(input) => setInput(input)}
            onSubmitEditing={createEx}
            />
            <Button onPress={createEx} title="create"/>
        </View>
    )
}
