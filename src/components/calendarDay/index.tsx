import React, { Component } from 'react'
import { Number, Wrapper } from './styles'
import moment from 'moment'

export interface IProps {
  date: any
}


class CalendarDay extends Component<IProps> {
  render() {
    const { date } = this.props
    const markedDates = [
      '2019-07-01'
    ]
    const currentDate = moment().format("YYYY-MM-DD")
    return (
      <Wrapper current={currentDate === date.dateString} hasData={markedDates.indexOf(date.dateString) !== -1}>
        <Number current={currentDate === date.dateString}>{date.day}</Number>
      </Wrapper>
    )
  }
}

export default CalendarDay
