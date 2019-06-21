import React, { Component } from 'react'
import { Title, SubText, Spacer } from './styles'

export interface IProps {
  title?: string
  subText?: string
  colour: string
  addMargin?: any
  align?: 'left' | 'center' | 'right'
}

class ScreenHeader extends Component<IProps> {

  render() {

    const {
      title,
      subText,
      colour,
      addMargin,
      align,
    } = this.props

    return (
      <>
        {title && (<Title colour={colour} align={align}>{title}</Title>)}
        {subText && (<SubText colour={colour} align={align}>{subText}</SubText>)}
        {addMargin && (<Spacer />)}
      </>
    )
  }
}

export default ScreenHeader
