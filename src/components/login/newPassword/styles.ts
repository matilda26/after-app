import { spacing, typeSizes, colours } from '@styles/index'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export const NewPasswordCopyWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: ${spacing.lg};
  margin-bottom: ${spacing.xl};
  padding-horizontal: ${spacing.lg};
`
export const NewPasswordFormWrapper = styled(View)`
`
export const Heading = styled(Text)`
  font-size: ${typeSizes.h5};
`
export const Message = styled(Text)`
  font-size: ${(props: any) => props.label ? typeSizes.small : typeSizes.large};
  line-height: ${(props: any) => props.label ? typeSizes.h5 : typeSizes.h3};
  color: ${colours.white.base};
  text-align: ${(props: any) => props.label ? 'left' : 'center'};
  margin-top: ${(props: any) => props.label ? spacing.xs : spacing.lg};
  margin-bottom: ${(props: any) => props.label ? spacing.md : spacing.lg};
`