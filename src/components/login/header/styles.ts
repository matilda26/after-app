import { colours, spacing, fonts, typeSizes } from '@styles/index'
import { TouchableHighlight, View, Text } from 'react-native'
import styled from 'styled-components'

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${spacing.xxl};
`
export const IconWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`
export const LeftButton = styled(TouchableHighlight)`
  margin-bottom: ${spacing.sm};
`
export const Label = styled(Text)`
  font-family: ${fonts.book};
  font-size: ${typeSizes.large};
  color: ${(props: any) => props.colour};
  margin-left: ${spacing.sm};
  margin-top: ${spacing.xs};
`