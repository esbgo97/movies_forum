import React from 'react'
import { View, Text, Button, } from "react-native"
import GlobalStyles from "../../utils/GlobalStyles"
import Divider from './Divider'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ListItem = ({ title, description, image, item, onPress }) => {
    return <View style={GlobalStyles.itemList} >
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>

    </View>
}

export default ListItem