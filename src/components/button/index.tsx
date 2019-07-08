import React, { Component } from 'react'
import { Wrapper, StyledText} from './styles'
import { colours } from '@styles/index'

export interface IProps {
  buttonText: string
  onButtonPress: () => void
  size: 'large' | 'small'
}

class MainButton extends Component<IProps> {

  onClick = () => {
    this.props.onButtonPress()
  }

  render() {
    const { buttonText, size } = this.props

    return (
      <Wrapper underlayColor={colours.orange.light} onPress={this.onClick} size={size}>
        <StyledText size={size}>{buttonText}</StyledText>
      </Wrapper>
    )
  }
}

export default MainButton
