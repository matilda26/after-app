import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Text, View, Image, Dimensions } from 'react-native'
var { height, width } = Dimensions.get('window')

export const Wrapper = styled(View)`
  margin-right: ${spacing.md};
  height: ${(width - 96) + 80};
`
export const InnerWrapper = styled(View)`
  flex-direction: row;
`
export const Label = styled(Text)`
  font-size: ${typeSizes.h5};
  font-family: ${fonts.bold};
  line-height: ${typeSizes.h3};
  color: ${colours.olive.base};
  text-align: left;
`
export const SubLabel = styled(Text)`
  font-size: ${typeSizes.body};
  font-family: ${fonts.book};
  line-height: ${typeSizes.h5};
  color: ${colours.olive.base};
  text-align: left;
`
export const ButtonImage = styled(Image)`
  flex: 1;
  width: 100%;
`
export const ImageWrapper = styled(View)`
  height: ${width - 96};
  width: ${width - 96};
  border-top-right-radius: ${spacing.lg};
  border-top-left-radius: ${spacing.lg};
  overflow: hidden;
  background-color: #fefbf1;
`
export const LabelWrapper = styled(View)`
  padding-horizontal: ${spacing.md};
  padding-vertical: ${spacing.lg};
  border-bottom-right-radius: ${spacing.xxl};
  border-bottom-left-radius: ${spacing.xxl};
  width: ${width - 96};
  justify-content: center;
  background-color: ${colours.white.base};
`
export const Shadow = styled(View)`
  width: 90%;
  height: 94%;
  background-color: ${colours.white.base};
  border-radius: ${spacing.md};
  shadow-color: ${colours.olive.light};
  shadow-offset: { width: 0, height: ${spacing.lg} };
  shadow-opacity: 0.2;
  shadow-radius: ${spacing.md};
  transform: rotate(180deg);
  position: absolute;
  left: 5%;
  bottom:0;
  z-index: -10;
`