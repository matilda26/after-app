import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Text, View, Image, Dimensions, TouchableHighlight } from 'react-native'
import Icon from '@components/icon';
var { height, width } = Dimensions.get('window')

export const Wrapper = styled(TouchableHighlight)`
  width: ${width};
  padding-vertical: ${spacing.md};
  padding-horizontal: ${spacing.md};
`
export const HeaderWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${spacing.sm};
`
export const Label = styled(Text)`
  font-size: ${typeSizes.h5};
  font-family: ${fonts.bold};
  line-height: ${typeSizes.h3};
  color: ${colours.olive.base};
  text-align: left;
  padding-vertical: ${spacing.sm};
`
export const SubLabel = styled(Text)`
  font-size: ${typeSizes.body};
  font-family: ${fonts.book};
  line-height: ${typeSizes.h5};
  color: ${colours.olive.base};
  text-align: left;
`
export const TickWrapper = styled(View)`
  height: 40;
  width: 40;
  border-radius: 24;
  background-color: ${colours.lightGrey.light};
  justify-content: center;
  align-items: center;
`
export const Tick = styled(Icon)`
  font-size: ${typeSizes.large};
  color: ${colours.lightGrey.base};
`