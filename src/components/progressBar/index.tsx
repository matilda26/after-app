import React, { Component } from 'react'
import { StatusWrapper, StyledText, StatusBar, Status } from './styles'
import { colours } from '@styles/index'

export interface IProps {
  currentValue: number
  target: number
}

class ProgressBar extends Component<IProps> {

  render() {

    const { currentValue, target } = this.props

    const label = `${currentValue}/${target} complete`

    return (
      <StatusWrapper>
        <StyledText>{label}</StyledText>
        <StatusBar>
          <Status
            target={target}
            currentValue={currentValue}
          />
        </StatusBar>
      </StatusWrapper>
    )
  }
}

export default ProgressBar
