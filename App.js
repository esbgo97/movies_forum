import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from './src/ui/screens/main/SplashScreen'

import HomeScreen from './src/ui/screens/main/HomeScreen'
import LoginScreen from './src/ui/screens/auth/LoginScreen'
import SignUpScreen from './src/ui/screens/auth/SignUpScreen'
import DashboardScreen from './src/ui/screens/common/DashboardScreen'

const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      IsLoading: false,
      Auth: {
        IsLogged: false,
        User: {}
      },

    }
  }

  render() {
    if (this.state.IsLoading)
      return <SplashScreen message="Starting App" />

    return (
      <NavigationContainer >
        <Drawer.Navigator initialRouteName={this.state.Auth.IsLogged ? "Dashboard" : "Home"}>
          {
            this.state.Auth.IsLogged ?
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
    );
  }
}

