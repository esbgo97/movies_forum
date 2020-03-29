
import React from 'react'
import { Header, Grid, Row, Col, H1, Icon } from 'native-base'

import { connect } from 'react-redux'

import { SignOut } from '../../store/auth/actions'
import GlobalStyles from '../../utils/GlobalStyles'
import Box from './Box'

const AppHeader = ({ title, onSignOut, navigation }) => {

    return (<Header >
        {/* <Box color="red"> */}
        <Box width="15%" >
            <Icon type="AntDesign" name="menufold" style={GlobalStyles.whiteColor} onPress={() => navigation.toggleDrawer()} />
        </Box>
        <Box width="70%" >
            <H1 style={GlobalStyles.whiteColor}>{title}</H1>
        </Box>
        <Box width="15%">
            <Icon type="AntDesign" name="logout" style={GlobalStyles.whiteColor} onPress={onSignOut} />
        </Box>
    </Header>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignOut: () => dispatch(SignOut())
    }
}
export default connect(null, mapDispatchToProps)(AppHeader)