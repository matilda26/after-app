import React, { Component } from 'react'
import RootStack from '@navigators/rootStack'
import { NavigationScreenProp } from 'react-navigation'
import { Font } from 'expo'

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
      'Gotham-Bold': require('../assets/fonts/Gotham-Bold.ttf')
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

export default App