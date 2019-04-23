import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Text, View } from 'react-native'
import Icon from '@components/icon';

export const Wrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  padding-horizontal: ${spacing.md};
  padding-vertical: ${spacing.md};
  background-color: ${(props: any) => props.colour};
`
export const Label = styled(Text)`
  font-size: ${typeSizes.large};
  font-family: ${fonts.bold};
  line-height: ${typeSizes.h3};
  color: ${(props: any) => props.active ? colours.olive.base : colours.white.base};
`
export const ButtonIcon = styled(Icon)`
  font-size: ${typeSizes.h3};
  line-height: ${typeSizes.h3};
  color: ${(props: any) => props.active ? colours.olive.base : colours.white.base};
  margin-right: ${spacing.md};
`