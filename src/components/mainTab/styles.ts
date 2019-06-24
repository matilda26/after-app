import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Text, View, Image, Dimensions, TouchableHighlight } from 'react-native'
import Icon from '@components/icon';

export const Wrapper = styled(TouchableHighlight)`
  padding-vertical: ${spacing.md};
`
export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`
export const Title = styled(Text)`
  font-size: ${typeSizes.h4};
  font-family: ${fonts.book};
  line-height: ${typeSizes.h2};
  color: ${colours.olive.base};
  text-align: left;
  margin-bottom: ${spacing.xs};
`
export const SubLabel = styled(Text)`
  font-size: ${typeSizes.large};
  font-family: ${fonts.book};
  line-height: ${typeSizes.h4};
  color: ${colours.olive.base};
  text-align: left;
`
export const SideArrow = styled(Icon)`
  font-size: ${typeSizes.h4};
  color: ${colours.olive.base};
`