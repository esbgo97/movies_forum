import React from 'react'
import { View } from 'react-native'

const Box = ({ height = "100%", width = "100%", color = "transparent", children = null }) => {
    return (<View style={{ width: width, height: height, backgroundColor: color, justifyContent: "center", alignItems: "center" }}>
        {children}
    </View >)
}

export default Box