import React, { Component } from 'react'
import { Title, SubText } from './styles'

export interface IProps {
  title?: string
  subText: string
}

class Login extends Component<IProps> {

  render() {

    const {
      title,
      subText,
    } = this.props

    return (
      <>
        <SubText>{subText}</SubText>
      </>
    )
  }
}

export default Login
