import { spacing, typeSizes } from '@styles/index'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { SectionWrapper } from '../styles'

export const NewPasswordWrapper = styled(SectionWrapper)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
export const NewPasswordCopyWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: ${spacing.lg};
  margin-bottom: ${spacing.xl};
  padding-horizontal: ${spacing.lg};
`
export const NewPasswordFormWrapper = styled(View)`
  flex: 2;
`
export const NewPasswordButtonWrapper = styled(View)`
  justify-content: flex-end;
`
export const Label = styled(Text)`
  font-size: ${typeSizes.small};
`
export const Heading = styled(Text)`
  font-size: ${typeSizes.h5};
`
export const Body = styled(Text)`
  font-size: ${typeSizes.body};
`