import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Icon from '@components/icon';

export const NextArrow = styled(Icon)`
  color: ${(props: any) => props.colour};
  font-size: ${typeSizes.h3};
`
export const ButtonWrapper = styled(TouchableHighlight)`
  margin-top: ${(props: any) => props.addMarginTop ? spacing.xl : 0};
  align-items: center;
  margin-bottom: ${spacing.md};
`
export const ButtonInner = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const ButtonText = styled(Text)`
  font-family: ${fonts.book};
  font-size: ${typeSizes.h2};
  color: ${(props: any) => props.colour};
  margin-right: ${spacing.sm};
  padding-top: ${spacing.xs};
`
export const SubmitButton = styled(TouchableOpacity)`
  opacity: ${(props: any) => props.disabled ? 0 : 1};
`
export const Spacer = styled(View)`
  height: ${(props: any) => props.addSpacer ? 120 : 60};
`
