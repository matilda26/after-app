import Icon from '@components/icon'
import { IProps } from '@components/navigation/iconTabItem'
import { colours, spacing, typeSizes, fonts } from '@styles/index'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export const Wrapper = styled(View)`
  margin-right: ${spacing.md};
`
export const Menu = styled(Icon)`
  font-size: ${typeSizes.large};
  color: ${colours.olive.base};
`