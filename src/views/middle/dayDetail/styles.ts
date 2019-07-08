import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Button, Text, View, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export const Wrapper = styled(View)`
  width: 100%;
  min-height: 100%;
  padding-horizontal: ${spacing.md};
  padding-top: ${spacing.md};
  background-color: ${colours.cream.light};
`
export const DiaryInput = styled(TextInput)`
  margin-vertical: ${spacing.xl};
  flex: 1;
  font-family: ${fonts.book};
  font-size: ${typeSizes.large};
  line-height: ${typeSizes.h3};
  color: ${colours.olive.base};
`
export const ModalWrapper = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const PopupWrapper = styled(View)`
  position: absolute;
  z-index: 100;
  width: 90%;
  left: 5%;
`
export const PopupTop = styled(View)`
  padding-vertical: ${spacing.lg};
  padding-horizontal: ${spacing.md};
  backgroundColor: ${colours.white.base};
  border-top-right-radius: ${spacing.md};
  border-top-left-radius: ${spacing.md};
  border-bottom-width: 2;
  border-bottom-color: ${colours.lightGrey.base};
`
export const PopupButton = styled(TouchableHighlight)`
  backgroundColor: ${(props: any) => props.secondary ? colours.white.base : colours.orange.base};
  flex: 1;
  padding-vertical: ${spacing.md};
  padding-horizontal: ${spacing.sm};
  border-bottom-right-radius: ${(props: any) => props.secondary ? 0 : spacing.md};
  border-bottom-left-radius: ${(props: any) => props.secondary ? spacing.md : 0};
`
export const PopupButtonText = styled(Text)`
  font-size: ${typeSizes.large};
  color: ${(props: any) => props.secondary ? colours.olive.base : colours.white.base};
  font-family: ${fonts.book};
  text-align: center;
`
export const Separator = styled(View)`
  width: 2;
  height: 100%;
  backgroundColor: ${colours.lightGrey.base};
`
export const StyledText = styled(Text)`
  font-size: ${typeSizes.h5};
  color: ${colours.olive.base};
  font-family: ${fonts.book};
`
export const PopupButtonWrapper = styled(View)`
  flex-direction: row;
`
export const PopupBackground = styled(View)`
  backgroundColor: ${colours.olive.base};
  opacity: 0.6;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`