import React, { Component } from 'react'
import { Number, Wrapper } from './styles'

export interface IProps {
  number: number
}

class CalendarDay extends Component<IProps> {
  render() {
    const { number } = this.props
    return (
      <Wrapper>
        <Number>{number}</Number>
      </Wrapper>
    )
  }
}

export default CalendarDay
