import { colours, spacing, fonts, typeSizes } from '@styles/index'
import { Text, View } from 'react-native'
import styled from 'styled-components'

export const Message = styled(Text)`
  font-family: ${fonts.book};
  font-size: ${typeSizes.large};
  color: ${colours.olive.dark};
  line-height: ${typeSizes.h3};
  text-align: center;
  padding-horizontal: ${spacing.md};
  margin-bottom: ${spacing.xl};
`
export const Spacer = styled(View)`
  height: ${spacing.xxl};
`