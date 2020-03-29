import React from 'react'
import { connect } from 'react-redux'
import { Text, Icon } from 'native-base'

import GlobalStyles, { palette } from '../../utils/GlobalStyles'
import Box from './Box'
import { HideAlert } from '../../store/main/actions'

const AppAlert = ({ type, message, close }) => {

    return (<Box color={palette[type]} height={50}>
        <Text style={GlobalStyles.whiteColor}> {message}</Text>
        <Icon type="AntDesign" name="close"
            style={GlobalStyles.whiteColor}
            onPress={() => close()} />
    </Box>)

}

const mapStateToProps = (state) => {
    return {
        type:state.main.alert.type,
        message:state.main.alert.message
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        close: () => dispatch(HideAlert())
    }
}
export default connect(mapStateToProps, mapDispatchToState)(AppAlert)