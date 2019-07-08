import React, { Component } from 'react'
import { Wrapper, StyledText} from './styles'
import { colours } from '@styles/index'

export interface IProps {
  buttonText: string
  onButtonPress: () => void
  size: 'large' | 'small'
  disabled: boolean
}

class MainButton extends Component<IProps> {

  onClick = () => {
    this.props.onButtonPress()
  }

  render() {
    const { buttonText, size, disabled } = this.props

    return (
      <Wrapper underlayColor={size === 'large' ? colours.orange.light : colours.cream.light} onPress={this.onClick} size={size} disabled={disabled}>
        <StyledText size={size} disabled={disabled}>{buttonText}</StyledText>
      </Wrapper>
    )
  }
}

export default MainButton
