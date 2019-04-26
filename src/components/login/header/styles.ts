import Icon from '@components/icon'
import { colours, spacing } from '@styles/index'
import { SafeAreaView, TouchableHighlight, View } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(SafeAreaView)`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`
const Container = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.lg};
  width: 100%;
  position: relative;
`
const Logo = styled(Icon)`
  color: ${colours.red.base};
  font-size: 32;
  margin-left: -${spacing.xl};
  margin-right: ${spacing.sm};
`
const LogoType = styled(Icon)`
  color: ${colours.olive.base};
  font-size: 28;
  margin-right: auto;
`
const IconWrapper = styled(TouchableHighlight)`
  width: ${spacing.xl};
  height: ${spacing.xl};
  flex-grow: 0;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${spacing.sm};
  margin-right: auto;
`

export { Container, IconWrapper, Wrapper, Logo, LogoType }
