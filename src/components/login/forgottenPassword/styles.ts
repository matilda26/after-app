import { spacing } from '@styles'
import { View } from 'react-native'
import styled from 'styled-components'
import { SectionWrapper } from '../styles'

const ForgottenPasswordWrapper = styled(SectionWrapper)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const ForgottenPasswordCopyWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: ${spacing.lg};
  margin-bottom: ${spacing.xl};
  padding-horizontal: ${spacing.lg};
`

const ForgottenPasswordFormWrapper = styled(View)`
  flex: 2;
`

export {
  ForgottenPasswordCopyWrapper,
  ForgottenPasswordFormWrapper,
  ForgottenPasswordWrapper,
}
