import { Text, View } from 'react-native'
import { fonts, colours } from '@styles/index'
import styled from 'styled-components'

export const TextLink = styled(Text)`
  font-family: ${fonts.bold};
  color: ${colours.white.base};
`
export const LoaderWrapper = styled(View)`
  width: 38;
  height: 32;
`