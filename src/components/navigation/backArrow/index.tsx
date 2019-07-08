import React, { Component } from 'react'
import { Arrow, Wrapper } from './styles'
import { colours } from '@styles/index'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import { toggleDiaryModal } from '@state/actions/middle'
import { connect } from 'react-redux'

export interface IProps {
  destination: string
  navigation: NavigationScreenProp<any, any>
  type: 'diary' | 'regular'
  currentEntryState: boolean
  toggleDiaryModal: () => void
}

class BackArrow extends Component<IProps> {

  onButtonClick = () => {
    if (this.props.type === 'diary' && this.props.currentEntryState) {
      this.props.toggleDiaryModal()
    } else {
      this.props.navigation.navigate(this.props.destination)
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
  toggleDiaryModal: () => dispatch(toggleDiaryModal())
})

const mapStateToProps = state => {
  return {
    currentEntryState: state.middleState.currentEntryState
  }
}

export default connect(
  mapStateToProps,
	mapDispatchToProps,
)(withNavigation(BackArrow))