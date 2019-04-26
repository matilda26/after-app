import { spacing, typeSizes } from '@styles/index'
import { Image, View, Text } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(View)`
  align-items: center;
  flex: 1;
  justify-content: center;
`
const OnBoarding = styled(View)`
  position: relative;
  align-items: center;
`
const OnBoardingImage = styled(Image)`
  flex: 1;
  width: 100%;
  height: 100%;
`
const OnBoardingImageWrapper = styled(View)`
  align-items: flex-start;
  height: 200;
  width: 250;
  margin-bottom: ${spacing.lg};
`
const OnBoardingCopyWrapper = styled(View)`
  flex-grow: 1;
  padding-horizontal: ${spacing.md};
  margin-bottom: ${spacing.md};
`
const OnBoardingCopy = styled(Text)`
  font-size: ${typeSizes.large};
  flex-wrap: wrap;
  flex-grow: 1;
`

export {
  Wrapper,
  OnBoarding,
  OnBoardingCopy,
  OnBoardingCopyWrapper,
  OnBoardingImageWrapper,
  OnBoardingImage,
}
