import React, { Component } from 'react'
import ScreenHeader from '@components/screenHeader'
import { colours, fonts, typeSizes } from '@styles/index'
import { CalendarList } from 'react-native-calendars'
import { Wrapper, CalendarWrapper } from './styles'
import CalendarDay from '@components/calendarDay'

interface IProps {

}

class Calendar extends Component<IProps> {

	render() {
		return (
			<>
				<Wrapper>
					<ScreenHeader
						title="The Middle"
						subText="This section is all about capturing the essence of you.  The start of your journey and how that makes you unique - the true you."
						colour={colours.olive.base}
						align='left'
					/>
				</Wrapper>
				<CalendarWrapper>
					<CalendarList
						onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
						pastScrollRange={50}
						futureScrollRange={50}
						scrollEnabled={true}
						showScrollIndicator={true}
						current={'2019-07-03'}
						onDayPress={(day) => { alert(day) }}
						firstDay={1}
						theme={{
							backgroundColor: colours.cream.base,
							calendarBackground: colours.cream.light,
							textSectionTitleColor: colours.olive.light,
							selectedDayBackgroundColor: colours.orange.base,
							selectedDayTextColor: '#ffffff',
							todayTextColor: '#00adf5',
							todayKnobColour: 'red',
							dayTextColor: colours.olive.base,
							textDisabledColor: '#d9e1e8',
							dotColor: '#00adf5',
							selectedDotColor: '#ffffff',
							arrowColor: 'orange',
							monthTextColor: colours.olive.base,
							indicatorColor: 'blue',
							textDayFontFamily: fonts.book,
							textMonthFontFamily: fonts.book,
							textDayHeaderFontFamily: fonts.book,
							textDayFontWeight: '300',
							textMonthFontWeight: 'bold',
							textDayHeaderFontWeight: '300',
							textDayFontSize: typeSizes.h5,
							textMonthFontSize: typeSizes.h4,
							textDayHeaderFontSize: typeSizes.large,
						}}
						dayComponent={({ date }) => (<CalendarDay number={date.day} />)}
						markedDates={{
							'2019-07-03': { textColor: '#fff', color: colours.orange.base, selected: true }
						}}
					/>
				</CalendarWrapper>
			</>
		)
	}
}

export default Calendar


// if no entries, create entry
// calendar view