import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import { KeyboardAvoidingView, Text, TextInput, TouchableHighlight, TouchableOpacity, View, ScrollView } from 'react-native'

var { height, width } = Dimensions.get('window')

export const ScrollWrapper = styled(ScrollView)`
  background-color: ${colours.olive.base};
  padding-horizontal: ${spacing.md};
`
export const KeyboardAvoidView = styled(KeyboardAvoidingView)`
  height: 100%;
`
export const SectionWrapper = styled(View)`
  flex: 1;
  flex-direction: column;
`
export const Section = styled(View)`

`
export const SectionLower = styled(View)`
  flex: 1;
  border: 2px solid pink;
  justify-content: flex-end;
  flex-direction: column;
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
  width: 100%;
  padding-left: ${spacing.md};
  padding-right: ${spacing.md};
  border-bottom-width: 2;
  border-bottom-color: ${colours.white.base};
  font-size: ${typeSizes.large};
  color: ${colours.white.base};
  font-family: ${fonts.book};

  ${(props: any) => props.hasErrors ? `
    border-width: 1;
    border-color: ${colours.red.base}` : `
    border-width: 1;
    border-color: transparent;`
  };
`
export const SubmitButton = styled(TouchableOpacity)`
  background-color: ${(props: any) => props.disabled ? colours.olive.light : colours.white.base};
  height: 64;
  align-items: center;
  justify-content: center;
  margin-left: ${spacing.md};
  margin-right: ${spacing.md};
  border-radius: ${spacing.xl};
`
export const ButtonWrapper = styled(TouchableHighlight)`
  margin-top: ${spacing.xxl};
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
  font-family: ${(props: any) => props.disabled ? fonts.book : fonts.bold};
  font-size: ${typeSizes.large};
  color: ${colours.olive.base};
`
export const Spacer = styled(View)`
  height: ${spacing.lg};
`
export const Label = styled(Text)`
  font-size: ${typeSizes.body};
  color: ${colours.white.base};
  font-family: ${(props: any) => props.light ? fonts.book : fonts.medium};
`
export const SubLabel = styled(Text)`
  font-size: ${typeSizes.small};
  color: ${colours.white.base};
  font-family: ${fonts.book};
`