import Icon from '@components/icon'
import { IProps } from '@components/navigation/iconTabItem'
import { colours, spacing, typeSizes, fonts } from '@styles/index'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export const Logo = styled(View)`
  height: ${spacing.md};
  width: ${spacing.md};
  backgroundColor: ${colours.olive.base};
  border-radius: 24;
`
