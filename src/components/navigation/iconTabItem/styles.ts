import Icon from '@components/icon'
import { IProps } from '@components/navigation/iconTabItem'
import { colours, spacing, typeSizes } from '@styles/index'
import { View } from 'react-native'
import styled from 'styled-components'

export const IconItem = styled(Icon)`
  font-size: ${typeSizes.h5};
  margin-bottom: ${spacing.sm};
  color: ${(props: IProps) => props.focused ? colours.white.base : colours.olive.base};
`
export const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
