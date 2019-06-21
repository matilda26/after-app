import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { Text, View, TextInput } from 'react-native'
import styled from 'styled-components'

export const ErrorMessage = styled(Text)`
  color: ${colours.red.base};
  font-size: ${typeSizes.large};
  position: absolute;
  top: 100%;
  padding-top: ${spacing.xxs};
`
export const InputLabel = styled(Text)`
  font-family: ${fonts.book};
  color: ${(props: any) => props.hasErrors ? colours.red.base : props.colour};
  font-size: ${(props: any) => props.focused ? typeSizes.large : typeSizes.h4};
  position: absolute;
  bottom: ${(props: any) => props.focused ? 60 : spacing.sm};
`
export const InputField = styled(TextInput)`
  height: 60;
  width: 100%;
  border-bottom-width: 2;
  border-bottom-color: ${(props: any) => props.hasErrors ? colours.red.base : props.colour};
  font-size: ${typeSizes.h4};
  color: ${(props: any) => props.colour};
  font-family: ${fonts.book};
`
export const InputWrapper = styled(View)`
  width: 100%;
  position: relative;
`