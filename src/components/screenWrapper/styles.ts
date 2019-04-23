import { spacing } from '@styles/index'
import styled from 'styled-components'
import { ScrollView } from 'react-native-gesture-handler';

export const Wrapper = styled(ScrollView)`
  width: 100%;
  padding-horizontal: ${spacing.md};
  padding-vertical: ${spacing.md};
`
