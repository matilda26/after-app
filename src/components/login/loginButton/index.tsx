import React, { PureComponent } from 'react'
import { ButtonWrapper, SubmitButton, ButtonInner, ButtonText, NextArrow, Spacer } from './styles'
import { View } from 'react-native'

interface IProps {
  disabled: boolean
  onPress: () => void
  buttonLabel: string
  colour: String
  addSpacer?: boolean
}

class LoginButton extends PureComponent<IProps> {

  render() {
    const {
      disabled,
      onPress,
      buttonLabel,
      colour,
      addSpacer
    } = this.props

    return (
      <View>
        <Spacer addSpacer={addSpacer} />
        <ButtonWrapper>
          <SubmitButton disabled={disabled} onPress={onPress}>
            {/* {!(this.props.httpState.loading && this.props.httpState.source === 'login') && ( */}
            <ButtonInner>
              <ButtonText disabled={disabled} colour={colour}>{buttonLabel}</ButtonText>
              <NextArrow name='right' colour={colour} />
            </ButtonInner>
            {/* )} */}
          </SubmitButton>
        </ButtonWrapper>
      </View>
    )
  }
}

export default LoginButton
