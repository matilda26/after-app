import React, { Component } from 'react'
import { Title, SubText, Spacer } from './styles'

export interface IProps {
  title?: string
  subText?: string
  colour: string
  addMargin: any
}

class ScreenHeader extends Component<IProps> {

  render() {

    const {
      title,
      subText,
      colour,
      addMargin,
    } = this.props

    return (
      <>
        {title && (<Title colour={colour}>{title}</Title>)}
        {subText && (<SubText colour={colour}>{subText}</SubText>)}
        {addMargin && (<Spacer />)}
      </>
    )
  }
}

export default ScreenHeader
