import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from './src/ui/screens/main/SplashScreen'

import HomeScreen from './src/ui/screens/main/HomeScreen'
import LoginScreen from './src/ui/screens/auth/LoginScreen'
import SignUpScreen from './src/ui/screens/auth/SignUpScreen'
import DashboardScreen from './src/ui/screens/common/DashboardScreen'

import AuthService from './src/services/AuthService'

const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor() {
    super();
    this.authService = new AuthService()

    this.state = {
      IsLoading: false,
      Alert: {
        Type: "",
        Message: ""
      },
      Auth: {
        IsLogged: false,
        User: null
      },

    }
    this.toggleLoading.bind(this);
  }

  componentDidMount = () => {
    this.setState({ IsLoading: true })
    let authResult = this.authService.getCurrentUser()
    if (typeof authResult === "string") {
      this.setState({
        IsLoading: false,
        Alert: {
          Type: "error",
          Message: authResult
        }
      })
    }

    this.setState({
      IsLoading: false,
      Auth: {
        IsLogged: authResult != null,
        User: authResult
      }
    })
  }

  toggleLoading = (isLoad) => {
    this.setState({ IsLoading: isLoad })
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
                <Drawer.Screen name="Dashboard"
                  component={DashboardScreen}
                  options={{ setLoading: this.toggleLoading }} />
              </> :
              <>
                <Drawer.Screen name="Home" component={HomeScreen}  />
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="SignUp" component={SignUpScreen} />
              </>
          }
        </Drawer.Navigator>

      </NavigationContainer>
    );
  }
}

