import React, { Component } from 'react'
import { Wrapper, Title, SubLabel, Header, SideArrow } from './styles'
import { colours } from '@styles/index'
import ProgressBar from '@components/progressBar'

export interface IProps {
  label: string
  subLabel: string
  progressValue: number
  progressTarget: number
}

class MainTab extends Component<IProps> {

  render() {

    const { label, subLabel, progressValue, progressTarget } = this.props

    return (
      <Wrapper underlayColor={colours.cream.light} onPress={() => console.log('hello')}>
        <>
          <Header>
            <Title>{label}</Title>
            <SideArrow name='right' />
          </Header>
          <SubLabel>{subLabel}</SubLabel>
          <ProgressBar currentValue={progressValue} target={progressTarget} />
        </>
      </Wrapper>
    )
  }
}

export default MainTab
