import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Button, Text, View, TouchableHighlight } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export const Wrapper = styled(View)`
  width: 100%;
  min-height: 100%;
  padding-horizontal: ${spacing.md};
  padding-vertical: ${spacing.md};
  background-color: ${colours.cream.light};
`
export const DiaryInput = styled(TextInput)`
  margin-vertical: ${spacing.xl};
`
export const SaveButton = styled(Button)`
  
`