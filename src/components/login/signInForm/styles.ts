import { Text, View } from 'react-native'
import styled from 'styled-components'

const TextLink = styled(Text)`
  text-decoration: underline;
  font-weight: ${(props: any) => props.weight || 600};
`

const LoaderWrapper = styled(View)`
  width: 38;
  height: 32;
`

export { LoaderWrapper, TextLink }
