import React, { Component } from 'react'
import { Wrapper, ButtonImage, Label, ImageWrapper, LabelWrapper, Shadow, SubLabel } from './styles'

export interface IProps {
  image: string
  label: string
  subLabel: string
}

class MainButton extends Component<IProps> {

  render() {

    const { image, label, subLabel } = this.props

    return (
      <Wrapper >
          <ImageWrapper>
            <ButtonImage source={image} />
          </ImageWrapper>
          <LabelWrapper>
            <Label>{label}</Label>
            <SubLabel>{subLabel}</SubLabel>
          </LabelWrapper>
        <Shadow />
      </Wrapper>
    )
  }
}

export default MainButton
