import React, { Component } from 'react'
import { Arrow, Wrapper } from './styles'
import { colours } from '@styles/index'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import { toggleDiaryModal, fetchDiaryEntries } from '@state/actions/middle'
import { connect } from 'react-redux'

export interface IProps {
  destination: string
  navigation: NavigationScreenProp<any, any>
  type: 'diary' | 'regular'
  currentEntryState: boolean
  currentEntrySaved: boolean
  toggleDiaryModal: () => void
  fetchDiaryEntries: () => void
}

class BackArrow extends Component<IProps> {

  onButtonClick = () => {
    if (this.props.type === 'diary' && this.props.currentEntrySaved) {
      this.props.fetchDiaryEntries()
      this.props.navigation.navigate(this.props.destination)
    } else {
      this.props.toggleDiaryModal()
    }
  }

  render() {

    return (
      <Wrapper underlayColor={colours.cream.light} onPress={this.onButtonClick}>
        <Arrow name='angle-left' />
      </Wrapper>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  toggleDiaryModal: () => dispatch(toggleDiaryModal()),
  fetchDiaryEntries: () => dispatch(fetchDiaryEntries())
})

const mapStateToProps = state => {
  return {
    currentEntryState: state.middleState.currentEntryState,
    currentEntrySaved: state.middleState.currentEntrySaved
  }
}

export default connect(
  mapStateToProps,
	mapDispatchToProps,
)(withNavigation(BackArrow))