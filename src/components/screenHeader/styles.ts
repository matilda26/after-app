import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { Text, View } from 'react-native'
import styled from 'styled-components'

export const Title = styled(Text)`
  font-size: ${typeSizes.h2};
  font-family: ${fonts.bold};
  color: ${(props: any) => props.colour};
`
export const SubText = styled(Text)`
  font-size: ${typeSizes.large};
  font-family: ${fonts.book};
  color: ${(props: any) => props.colour};
  line-height: ${typeSizes.h4};
  margin-top: ${spacing.md};
`
export const Spacer = styled(View)`
  height: 60;
`