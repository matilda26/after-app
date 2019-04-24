import styled from 'styled-components'
import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { FlatList, View } from 'react-native'

export const ListWrapper = styled(FlatList)`
  padding-horizontal: ${spacing.md};
  padding-vertical: ${spacing.md};
  background-color: #f3f3f3;
`
export const ButtonWrapper = styled(FlatList)`
  
`
export const Separator = styled(View)`
  height: 2;
  background-color: ${colours.lightGrey.light};
  margin-horizontal: ${spacing.md};
`