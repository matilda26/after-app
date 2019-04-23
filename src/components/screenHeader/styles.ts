import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { Text, View } from 'react-native'
import styled from 'styled-components'

export const Title = styled(Text)`
  font-size: ${typeSizes.h2};
  font-family: ${fonts.bold};
  color: ${colours.olive.base};
`
export const SubText = styled(Text)`
  font-size: ${typeSizes.large};
  font-family: ${fonts.book};
  color: ${colours.olive.base};
`

