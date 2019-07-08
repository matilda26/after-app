import React, { Component } from 'react'
import { Number, Wrapper } from './styles'
import moment from 'moment'
import { colours } from '@styles/index'

export interface IProps {
  date: any
  markedDates: string[]
  onDayPress: (day: any) => void
}


class CalendarDay extends Component<IProps> {

  onDayPress = () => {
    this.props.onDayPress(this.props.date.dateString)
  }

  render() {
    const { date, markedDates } = this.props
    const currentDate = moment().format("YYYY-MM-DD")
    return (
      <Wrapper
        current={currentDate === date.dateString}
        hasData={markedDates.indexOf(date.dateString) !== -1}
        onPress={this.onDayPress}
        underlayColor={colours.orange.light}
      >
        <Number current={currentDate === date.dateString}>{date.day}</Number>
      </Wrapper>
    )
  }
}

export default CalendarDay
