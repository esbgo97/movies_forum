import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from './ui/screens/main/SplashScreen'
import HomeScreen from './ui/screens/main/HomeScreen'
import LoginScreen from './ui/screens/auth/LoginScreen'
import SignUpScreen from './ui/screens/auth/SignUpScreen'
import DashboardScreen from './ui/screens/common/DashboardScreen'
import AppAlert from './ui/partials/AppAlert'

import { connect } from 'react-redux';
const Drawer = createDrawerNavigator();

const AppContainer = ({ state }) => {
    const { auth, main } = state
    if (main.isLoading) return <SplashScreen />

    return (<><NavigationContainer >
        <Drawer.Navigator initialRouteName={auth.isLogged ? "Dashboard" : "Home"}>
            {
                auth.isLogged ?
                    <>
                        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
                    </> :
                    <>
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Login" component={LoginScreen} />
                        <Drawer.Screen name="SignUp" component={SignUpScreen} />
                    </>
            }
        </Drawer.Navigator>
    </NavigationContainer>
        {main.alert && main.alert.message != "" && <AppAlert />}
    </>)
}
const mapState = (state) => { return { state } }
export default connect(mapState)(AppContainer)

