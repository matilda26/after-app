import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

const CheckBoxContainer = styled(TouchableOpacity)`
  flex-direction: row;
`

const CheckBoxTick = styled(View)`
  width: 24;
  height: 24;
  border-radius: 6;
  background-color: ${colours.white.base};
  margin-right: ${spacing.md};
`

const CheckBoxTextContainer = styled(View)`
  color: ${colours.olive.base};
  font-family: ${fonts.book};
  font-size: ${typeSizes.small};
`

export {
  CheckBoxContainer,
  CheckBoxTextContainer,
  CheckBoxTick,
}
