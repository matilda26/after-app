import React, { Component } from 'react'
import { Wrapper } from './styles'

export interface IProps {
  children: any
}

class ScreenWrapper extends Component<IProps> {

  render() {

    const { children } = this.props

    return (
      <Wrapper>
        {children}
      </Wrapper>
    )
  }
}

export default ScreenWrapper
