import React, { Component } from 'react'
import { Wrapper, Menu } from './styles'
import { colours } from '@styles/index'
import { withNavigation, NavigationScreenProp } from 'react-navigation'

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

class MenuIcon extends Component<IProps, any> {

  goToSettings = () => {
    this.props.navigation.navigate('Settings')
  }
  render() {

    return (
      <Wrapper underlayColor={colours.cream.light} onPress={this.goToSettings}>
        <Menu name='menu' />
      </Wrapper>
    )
  }
}

export default withNavigation(MenuIcon)
