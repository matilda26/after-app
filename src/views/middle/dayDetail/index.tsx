import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import ScreenHeader from '@components/screenHeader'
import { DiaryInput,  PopupWrapper, PopupTop, PopupButton, PopupButtonWrapper, PopupBackground, StyledText, ModalWrapper, PopupButtonText, Separator, Wrapper } from './styles'
import { colours } from '@styles/index'
import DiaryService from '@services/diaryService'
import { IDiaryEntry } from '@models/diary'
import BlobLoader from '@components/blobLoader'
import MainButton from '@components/button'
import { Modal, TouchableHighlight } from 'react-native'


interface IProps {
	currentFocusedDay: any
	loading: boolean
	currentEntry: IDiaryEntry
	user: any
}

interface IState {
	text: string
	placeholder: boolean
	modalVisible: boolean
}

class DayDetail extends Component<IProps, IState> {
	state = ({
		text: '',
		placeholder: false,
		modalVisible: true
	})

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.currentEntry !== this.props.currentEntry) {
			if (this.props.currentEntry === undefined) {
				this.setState({
					placeholder: true
				})
			} else {
				this.setState({
					text: this.props.currentEntry.diaryBody
				})
			}
		}
	}

	saveEntry = () => {
		const user = this.props.user.attributes.sub
		DiaryService.saveEntry(user, this.props.currentFocusedDay, this.state.text)
	}

	exitEntry = () => {
		
	}

	saveAndExit = () => {

	}

	render() {
		const {currentFocusedDay, loading} = this.props
		const momentObject = moment(currentFocusedDay, "YYYY-MM-DD")
		const formatedDate = momentObject.format('Do MMMM YYYY')

		if (loading) {
			return <BlobLoader />
		}

		return (
			<Wrapper>
				<Modal 
					animationType='fade'
					transparent={true}
					visible={this.state.modalVisible}
				>
					<PopupBackground />
					<ModalWrapper onPress={() => this.setState({modalVisible: false})} activeOpacity={1} >
						<PopupWrapper>
							<PopupTop>
								<StyledText>Are you sure you would like to exit without saving?</StyledText>
							</PopupTop>
							<PopupButtonWrapper>
								<PopupButton underlayColor={colours.orange.light} onPress={this.exitEntry} secondary>
									<PopupButtonText secondary>Exit without saving</PopupButtonText>
								</PopupButton>
								<PopupButton underlayColor={colours.orange.light} onPress={this.saveAndExit}>
									<PopupButtonText>Save and exit</PopupButtonText>
								</PopupButton>
							</PopupButtonWrapper>
						</PopupWrapper>
					</ModalWrapper>
				</Modal>

				<ScreenHeader
					title={formatedDate}
					colour={colours.olive.base}
					align='left'
				/>
				<DiaryInput
					placeholder='Start your entry here...'
					placeholderTextColor={colours.olive.light}
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
				/>
					<MainButton buttonText='Save' onButtonPress={this.saveEntry} size='large'/>
					<MainButton buttonText='Cancel' onButtonPress={this.exitEntry} size='small'/>
			</Wrapper>
		)
	}
}

const mapDispatchToProps = dispatch => ({
})

const mapStateToProps = state => {
	return {
		currentFocusedDay: state.middleState.focusedDay,
		currentEntry: state.middleState.currentEntry,
		loading: state.httpState.loading,
		user: state.loginState.user,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DayDetail)