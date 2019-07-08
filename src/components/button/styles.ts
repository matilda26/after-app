import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Text, View, TouchableHighlight } from 'react-native'

export const Wrapper = styled(TouchableHighlight)`
  width: 100%;
  background-color: ${(props: any) => props.size === 'large' ? props.disabled ? colours.lightGrey.base 
  : colours.orange.base : 'transparent'};
  padding-vertical: ${(props: any) => props.size === 'large' ? spacing.md : 0};
  padding-horizontal: ${(props: any) => props.size === 'large' ? spacing.md : 0};
  border-radius: ${(props: any) => props.size === 'large' ? spacing.xxl : 0};
  margin-vertical: ${(props: any) => props.size === 'large' ? 0 : spacing.md};
`
export const StyledText = styled(Text)`
  color: ${(props: any) => props.size === 'large' ? colours.white.base : colours.olive.light};
  font-size: ${typeSizes.h5};
  text-align: center;
  font-family: ${fonts.book};
`