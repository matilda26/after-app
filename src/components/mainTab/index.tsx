import React, { Component } from 'react'
import { Wrapper, Label, SubLabel, HeaderWrapper, TickWrapper, Tick } from './styles'
import { colours } from '@styles/index'

export interface IProps {
  label: string
  subLabel: string
}

class MainTab extends Component<IProps> {

  render() {

    const { label, subLabel } = this.props

    return (
      <Wrapper underlayColor={colours.cream.light} onPress={() => console.log('hello')}>
        <>
          <HeaderWrapper>
            <Label>{label}</Label>
            <TickWrapper>
              <Tick name='tick' />
            </TickWrapper>
          </HeaderWrapper>
          <SubLabel>{subLabel}</SubLabel>
        </>
      </Wrapper>
    )
  }
}

export default MainTab
