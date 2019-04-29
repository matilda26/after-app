import React, { PureComponent, ReactNode } from 'react'
import Icon from '@components/icon'
import { CheckBoxContainer, CheckBoxTextContainer, CheckBoxTick, Tick } from './styles'

interface IProps {
  checked?: boolean
  children: ReactNode
  onChange?: () => void
  disabled: boolean
}

class CheckBox extends PureComponent<IProps> {
  state = {
    isChecked: false,
    isDisabled: false,
  }

  componentDidMount() {
    const { checked } = this.props
    this.setState({ isChecked: !!checked })
  }

  componentDidUpdate() {
    this.setState({ isDisabled: !!this.props.disabled })
  }

  handleOnPress = () => {
    const { onChange } = this.props

    this.setState((prevState) => {
      return {
        isChecked: !prevState.isChecked,
      }
    })

    if (onChange) {
      onChange()
    }
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <CheckBoxContainer
        accessibilityComponentType={
          this.state.isChecked ? 'radiobutton_checked' : 'radiobutton_unchecked'
        }
        accessibilityTraits={
          this.state.isChecked ? ['button', 'selected'] : ['button']
        }
        disabled={this.state.isDisabled}
        onPress={() => this.handleOnPress()}
      >
        <CheckBoxTick>
          {this.state.isChecked ? (<Tick name='tick' />) : false}
        </CheckBoxTick>
        <CheckBoxTextContainer>{children}</CheckBoxTextContainer>
      </CheckBoxContainer>
    )
  }
}

export default CheckBox
