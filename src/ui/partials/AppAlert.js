import React from 'react'
import { connect } from 'react-redux'
import { Text, Icon } from 'native-base'

import GlobalStyles, { palette } from '../../utils/GlobalStyles'
import Box from './Box'
import { HideAlert } from '../../store/main/actions'

const AppAlert = ({ type, message, close }) => {

    return (<Box color={palette[type]} height={message.length * 2}>
        <Text style={GlobalStyles.whiteColor}> {message}</Text>
        <Icon type="AntDesign" name="close"
            style={GlobalStyles.whiteColor}
            onPress={() => close()} />
    </Box>)

}

const mapStateToProps = (state) => {
    return state.main.alert
}
const mapDispatchToState = (dispatch) => {
    return {
        close: () => dispatch(HideAlert())
    }
}
export default connect(mapStateToProps, mapDispatchToState)(AppAlert)