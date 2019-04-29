import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import Icon from '@components/icon';

export const CheckBoxContainer = styled(TouchableOpacity)`
  flex-direction: row;
`
export const CheckBoxTick = styled(View)`
  width: 24;
  height: 24;
  border-radius: 6;
  border: 2px solid ${colours.white.base};
  margin-right: ${spacing.md};
  align-items: center;
  justify-content: center;
`
export const CheckBoxTextContainer = styled(View)`
  color: ${colours.olive.base};
  font-family: ${fonts.book};
  font-size: ${typeSizes.small};
`
export const Tick = styled(Icon)`
  font-size: ${typeSizes.large};
  color: ${colours.white.base};
`