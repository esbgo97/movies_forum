import React from 'react'
import { Icon, Text,Button } from 'native-base'

const AppButton = ({ name, onPress, icon = false }) => {
    return <Button transparent onPress={onPress}>
        {icon && <Icon name={icon} />}
        <Text>{name}</Text>
    </Button>
}
export default AppButton
