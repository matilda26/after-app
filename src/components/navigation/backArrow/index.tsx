import React, { Component } from 'react'
import { Arrow, Wrapper } from './styles'
import { withNavigation, NavigationScreenProp } from 'react-navigation'

export interface IProps {
  destination: string
  navigation: NavigationScreenProp<any, any>
}

class BackArrow extends Component<IProps> {

  onButtonClick = () => {

  }

  render() {

    return (
      <Wrapper>
        <Arrow name='backArrow' />
      </Wrapper>
    )
  }
}

export default withNavigation(BackArrow)
