import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { View } from 'react-native'

export const Wrapper = styled(View)`
  height: 40;
  width: 40;
  border-radius: 40;
  background-color: ${colours.orange.light};
`
export const Number = styled(Text)`
  font-size: ${typeSizes.large};
  font-family: ${fonts.book};
  color: ${(props: any) => props.current ? '#fff' : colours.olive.base};
`