import Icon from '@components/icon'
import { IProps } from '@components/navigation/iconTabItem'
import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { Text, View } from 'react-native'
import styled from 'styled-components'

export const IconItem = styled(Icon)`
  font-size: ${typeSizes.h4};
  margin-bottom: ${spacing.sm};
  color: ${(props: any) => props.focused ? colours.white.base : colours.olive.base};
`
export const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const Label = styled(Text)`
  color: ${(props: any) => props.focused ? colours.white.base : colours.olive.base};
  font-family: ${fonts.book};
  font-size: ${typeSizes.body};
  font-weight: ${(props: IProps) => props.focused ? 600 : 400};
  margin-bottom: ${spacing.md};
  min-width: 100;
  text-align: center;
`
