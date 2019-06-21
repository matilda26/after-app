import React, { PureComponent } from 'react'
import { InputWrapper, InputLabel, InputField, ErrorMessage } from './styles'

interface IProps {
  colour: string
  hasErrors: boolean
  focused: boolean
  keyboardType: string
  autoCapitalize: string
  inputValue: string
  inputType?: string
  inputLabel: string
  textContentType: string
  errorMessage: string
  secureTextEntry: boolean
  onTextChange: (text: string) => void
  onFocus: () => void
  onBlur: () => void
}

class LoginInput extends PureComponent<IProps> {

  render() {
    const {
      colour,
      hasErrors,
      focused,
      keyboardType,
      autoCapitalize,
      inputValue,
      inputLabel,
      textContentType,
      onTextChange,
      onBlur,
      onFocus,
      errorMessage,
      secureTextEntry
    } = this.props

    return (
      <InputWrapper>
        <InputLabel
          colour={colour}
          hasErrors={hasErrors}
          focused={focused}
        >
          {inputLabel}
        </InputLabel>
        <InputField
          colour={colour}
          hasErrors={hasErrors}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          value={inputValue}
          onChangeText={onTextChange}
          textContentType={textContentType}
          selectionColor={colour}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputWrapper>
    )
  }
}

export default LoginInput
