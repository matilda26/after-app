import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Text, View } from 'react-native'

export const Wrapper = styled(View)`
  height: ${spacing.lg};
  width: ${spacing.lg}
  border-radius: ${spacing.lg};
  background-color: ${(props: any) => props.current ? colours.orange.base : props.hasData ? colours.orange.lighter : '#ffffff'};
  align-items: center;
  justify-content: center;
`
export const Number = styled(Text)`
  font-size: ${typeSizes.large};
  line-height: ${spacing.lg};
  font-family: ${fonts.book};
  color: ${(props: any) => props.current ? '#fff' : colours.olive.base};
`