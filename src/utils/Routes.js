import React from 'react'

import HomeScreen from '../ui/screens/main/HomeScreen'
import LoginScreen from '../ui/screens/auth/LoginScreen'
import SignUpScreen from '../ui/screens/auth/SignUpScreen'
import DashboardScreen from '../ui/screens/common/DashboardScreen'

const PrivateRoutes = ({ Drawer }) => {
    return (<>
        <Drawer.Screen name="Dashboard" component={DashboardScreen}/>
    </>)
}

const PublicRoutes = ({ Drawer }) => {
    return (<>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
    </>)
}

export { PrivateRoutes, PublicRoutes }