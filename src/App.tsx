import React, { Component } from 'react'
import RootStack from '@navigators/rootStack'
import { NavigationScreenProp } from 'react-navigation'
import { Font } from 'expo'

import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from '@aws-amplify/core'
import config from './aws-exports'
import Login from '@components/login'
Amplify.configure(config)

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

class App extends Component<IProps> {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'fontello': require('../assets/fonts/fontello.ttf'),
      'Gotham-Book': require('../assets/fonts/Gotham-Book.ttf'),
      'Gotham-Medium': require('../assets/fonts/Gotham-Medium.ttf'),
      'Gotham-Bold': require('../assets/fonts/Gotham-Bold.ttf'),
    });
    this.setState({
      fontLoaded: true,
    })
  }

  render() {
    return (
      <>
        {this.state.fontLoaded && (
          <RootStack
            navigation={this.props.navigation}
            screenProps={this.props}
          />
        )}
      </>
    )
  }
}

export default withAuthenticator(App)