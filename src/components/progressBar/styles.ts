import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Text, View } from 'react-native'

export const StatusWrapper = styled(View)`
  margin-top: ${spacing.xxs};
  margin-bottom: ${spacing.xxs};
`
export const StatusBar = styled(View)`
  width: 100%;
  height: ${spacing.xs};
  border-radius: ${spacing.xs};
  background-color: ${colours.white.base};
`
export const Status = styled(View)`
  height: ${spacing.xs};
  background-color: ${colours.blue.base};
  border-radius: ${spacing.xs};
  position: absolute;
  left: 0;
  top: 0;
  min-width: ${spacing.xs};
  width: ${(props: any) => `${(props.currentValue / props.target) * 100}%`};
`
export const StyledText = styled(Text)`
  font-family: ${fonts.book};
  font-size: ${typeSizes.large};
  color: ${colours.olive.base};
  text-align: right;
  margin-bottom: ${spacing.xs};
`
