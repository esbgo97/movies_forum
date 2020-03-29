import React, { Component } from 'react';
import { ActivityIndicator, Text } from 'react-native';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './src/store'
import AppContainer from './src/AppContainer';
import { getState, setState } from './src/utils/StatePersistent';
import Box from './src/ui/partials/Box';



const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, middleware)

export default class App extends Component {
  state = {
    isLoadingStore: false,
    store
  }

  componentDidMount() {
    this.setState({ isLoadingStore: true })
    getState().then((state) => {
      let currentStore = createStore(rootReducer, state, middleware)
      currentStore.subscribe(() => {
        setState(currentStore.getState())
      })
      this.setState({
        store: currentStore,
        isLoadingStore: false
      })
    })
  }

  render() {
    if (this.state.isLoadingStore)
      return <Box >
        <ActivityIndicator size="large" />
        <Text>Loading App State...</Text>
      </Box>

    return <Provider store={this.state.store}>
      <AppContainer />
    </Provider>
  }
}