import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { KeyboardAvoidingView, Text, TouchableHighlight, View, ScrollView } from 'react-native'

export const ScrollWrapper = styled(ScrollView)`
  
`
export const KeyboardAvoidView = styled(KeyboardAvoidingView)`
  height: 100%;
`
export const PageWrapper = styled(View)`
  background-color: ${(props: any) => props.backgroundColour};
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
  padding-horizontal: ${spacing.md};
`
export const CheckboxWrapper = styled(View)`
  width: 80%;
  margin-top: ${spacing.xl};
`
export const TextLink = styled(Text)`
  font-family: ${fonts.book};
  font-size: ${typeSizes.large};
  color: ${colours.white.base};
`
export const InputSpacer = styled(View)`
  height: ${spacing.xxl};
`
export const ButtonWrapper = styled(TouchableHighlight)`
  margin-top: ${spacing.xl};
  align-items: flex-end;
`
export const InputSection = styled(View)`

`