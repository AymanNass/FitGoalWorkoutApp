import React from 'react'
import { View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Text from '../components/Text'

import { TouchableOpacity } from 'react-native'


const MarkerRight = ({ text, onPress, top, left }) => (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', borderRadius: 20, position: 'absolute', top, left }}>
        <View style={{ flexDirection: 'row', }}>
            <Text medium semi>{text}</Text>
            <MaterialCommunityIcons name={"circle-slice-8"} size={24} color={"#FF2D55"} />
        </View>
    </TouchableOpacity>
)



export default MarkerRight