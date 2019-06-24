import styled from 'styled-components'
import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { FlatList, Image, View } from 'react-native'

export const ListWrapper = styled(FlatList)`
  margin-bottom: ${spacing.xl};
`
export const Separator = styled(View)`
  height: 1;
  background-color: ${colours.olive.light};
`
export const Illustration = styled(Image)`
  flex: 1;
  width: 100%;
  height: 100%;
`
export const ImageWrapper = styled(View)`
  align-items: flex-start;
  height: 280;
  width: 250;
  margin-vertical: ${spacing.lg};
`
export const ImageContainer = styled(View)`
  align-items: center;
  width: 100%;
`
export const ListFooter = styled(View)`
  height: ${spacing.xxl};
`