import React, { Component } from 'react'
import { Title, SubText } from './styles'

export interface IProps {
  title?: string
  subText: string
}

class ScreenHeader extends Component<IProps> {

  render() {

    const {
      title,
      subText,
    } = this.props

    return (
      <>
        {title && (<Title>{title}</Title>)}
        <SubText>{subText}</SubText>
      </>
    )
  }
}

export default ScreenHeader
