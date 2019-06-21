import Icon from '@components/icon'
import { IProps } from '@components/navigation/iconTabItem'
import { colours, spacing, typeSizes, fonts } from '@styles/index'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export const IconItem = styled(Icon)`
  font-size: ${typeSizes.h4};
  color: ${(props: IProps) => props.focused ? colours.olive.base : colours.cream.darker};
`
export const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const Label = styled(Text)`
  font-family: ${fonts.book};
  font-size: ${typeSizes.large};
  color: ${(props: any) => props.focused ? colours.olive.base : colours.cream.darker};
  text-align: center;
  margin-top: ${spacing.xs};
`