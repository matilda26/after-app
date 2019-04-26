import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { KeyboardAvoidingView, Text, TextInput, TouchableHighlight, TouchableOpacity, View, ScrollView } from 'react-native'

export const Wrapper = styled(ScrollView)`
  flex:1;
`
export const KeyboardAvoidView = styled(KeyboardAvoidingView)`
  flex: 1;
`
export const SectionWrapper = styled(View)`
  justify-content: flex-end;
  margin-bottom: ${spacing.xxl};
`
export const InputWrapper = styled(View)`
  width: 100%;
  margin-bottom: ${spacing.lg};
  position: relative;
`
export const CheckboxWrapper = styled(View)`
  padding-horizontal: ${spacing.xxl};
  width: 80%;
`
export const InputField = styled(TextInput)`
  height: 48;
  background-color: ${colours.white.base};
  width: 100%;
  padding-left: ${spacing.md};
  padding-right: ${spacing.md};
  border-radius: ${spacing.sm};
  font-size: ${typeSizes.large};
  color: ${colours.olive.base};
  font-family: ${fonts.book};

  ${(props: any) => props.hasErrors ? `
    border-width: 1;
    border-color: ${colours.red.base}` : `
    border-width: 1;
    border-color: transparent;`
  };
`
export const SubmitButton = styled(TouchableOpacity)`
  background-color: ${(props: any) => props.disabled ? colours.lightGrey.base : colours.red.base};
  border-radius: ${spacing.xl};
  height: 64;
  align-items: center;
  justify-content: center;
  margin-left: ${spacing.md};
  margin-right: ${spacing.md};
`
export const ButtonWrapper = styled(TouchableHighlight)`
  margin-top: ${spacing.lg};
  ${(props: any) => props.center ? `
  align-items: center;
  ` : ``};
`
export const ErrorMessage = styled(Text)`
  color: ${colours.red.base};
  font-size: ${typeSizes.tiny};
  position: absolute;
  top: 100%;
  padding-top: ${spacing.xxs};
`
export const ButtonText = styled(Text)`
  font-family: ${fonts.book};
  font-size: ${typeSizes.body};
  color: ${(props: any) => props.disabled ? colours.olive.base : colours.white.base};
`
export const Spacer = styled(View)`
  height: ${spacing.lg};
`
export const Label = styled(Text)`
  font-size: ${typeSizes.small};
`
