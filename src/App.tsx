import React, { Component } from 'react'
import RootStack from '@navigators/rootStack'
import { NavigationScreenProp } from 'react-navigation'
import { Font } from 'expo'
import Login from '@components/login'
import { connect } from 'react-redux'

import Amplify from '@aws-amplify/core'
import config from './aws-exports'
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
          <Login>
            <RootStack
              navigation={this.props.navigation}
              screenProps={this.props}
            />
          </Login>
        )}
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.loginState.user,
  }
}
export default connect(
  mapStateToProps,
)(App)