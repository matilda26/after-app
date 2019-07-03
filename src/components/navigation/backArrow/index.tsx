import React, { Component } from 'react'
import { Arrow, Wrapper } from './styles'
import { colours } from '@styles/index'
import { withNavigation, NavigationScreenProp } from 'react-navigation'

export interface IProps {
  destination: string
  navigation: NavigationScreenProp<any, any>
}

class BackArrow extends Component<IProps> {

  onButtonClick = () => {
    this.props.navigation.navigate(this.props.destination)
  }

  render() {

    return (
      <Wrapper underlayColor={colours.cream.light} onPress={this.onButtonClick}>
        <Arrow name='angle-left' />
      </Wrapper>
    )
  }
}

export default withNavigation(BackArrow)
