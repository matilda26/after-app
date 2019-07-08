import React, { Component } from 'react'
import ScreenHeader from '@components/screenHeader'
import { colours, fonts, typeSizes } from '@styles/index'
import { CalendarList } from 'react-native-calendars'
import { Wrapper, CalendarWrapper } from './styles'
import CalendarDay from '@components/calendarDay'
import { connect } from 'react-redux'
import { setFocusedDay, setCurrentDay, fetchDiaryEntries } from '@state/actions/middle'
import BlobLoader from '@components/blobLoader'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import moment from 'moment'

interface IProps {
	currentFocusedDay: any
	setCurrentFocusedDay: (day: any) => void
	setCurrentDay: (day: any) => void
	fetchDiaryEntries: () => void
	navigation: NavigationScreenProp<any, any>
	loading: boolean
	markedDates: string[]
}

class Calendar extends Component<IProps> {
	componentDidMount() {
		this.props.fetchDiaryEntries()
	}

	onDayPress = (date: any) => {
		this.props.setCurrentDay(date)
		this.props.navigation.navigate('DayDetail')
	}

	render() {
		const {loading, markedDates} = this.props

		if (loading) {
			return <BlobLoader />
		}
		console.log('marked', markedDates)

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
						pastScrollRange={50}
						futureScrollRange={50}
						scrollEnabled={true}
						showScrollIndicator={true}
						current={moment().format('YYYY-MM-DD')}
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
						dayComponent={({ date }) => (<CalendarDay date={date} onDayPress={this.onDayPress} markedDates={markedDates}/>)}
					/>
				</CalendarWrapper>
			</>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentFocusedDay: day => dispatch(setFocusedDay(day)),
	setCurrentDay: day => dispatch(setCurrentDay(day)),
	fetchDiaryEntries: () => dispatch(fetchDiaryEntries())
})

const mapStateToProps = state => {
	return {
		currentFocusedDay: state.middleState.focusedDay,
		loading: state.httpState.loading,
		markedDates: state.middleState.markedDates
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(withNavigation(Calendar))