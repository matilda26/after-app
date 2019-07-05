import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFocusedDay, fetchDiaryEntries } from '@state/actions/middle'
import moment from 'moment'
import ScreenHeader from '@components/screenHeader'
import { DiaryInput, SaveButton, Wrapper } from './styles'
import { colours } from '@styles/index'
import DiaryService from '@services/diaryService'
import { IDiaryEntry } from '@models/diary'


interface IProps {
	currentFocusedDay: any
	user: any
	diaryEntries: IDiaryEntry[]
	fetchDiaryEntries: () => void
}

interface IState {
	text: string
}

class DayDetail extends Component<IProps, IState> {
	state = ({
		text: null
	})

	componentDidMount() {
		this.props.fetchDiaryEntries()
	}

	saveEntry = async() => {
		const user = this.props.user.attributes.sub
		DiaryService.saveEntry(user, this.props.currentFocusedDay, this.state.text)
	}
	
	render() {
		const {currentFocusedDay, user, diaryEntries} = this.props
		const momentObject = moment(currentFocusedDay, "YYYY-MM-DD")
		const formatedDate = momentObject.format('Do MMMM YYYY')
		const currentEntry = diaryEntries.filter(entry => entry.userID === user.attributes.sub && entry.date === currentFocusedDay)

		return (
			<Wrapper>
				<ScreenHeader
					title={formatedDate}
					colour={colours.olive.base}
					align='left'
				/>
				<DiaryInput
					placeholder="Click to start writing..."
					placeholderTextColor={colours.olive.base}
					clearTextOnFocus={true}
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
				/>
				<SaveButton onPress={this.saveEntry} title="Save" />
			</Wrapper>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentFocusedDay: (day) => dispatch(setFocusedDay(day)),
	fetchDiaryEntires: () => dispatch(fetchDiaryEntries())
})

const mapStateToProps = state => {
	return {
		currentFocusedDay: state.middleState.focusedDay,
		user: state.loginState.user,
		diaryEntries: state.middleState.diaryEntires,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DayDetail)