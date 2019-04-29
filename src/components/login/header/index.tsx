import { Arrow } from '@components/navigation/backArrow/styles'
import ScreenHeader from '@components/screenHeader'
import { colours } from '@styles/index'
import React, { Component } from 'react'
import { Container, IconWrapper } from './styles'
import { SafeAreaView } from 'react-native'

interface IProps {
  navigateBack?: () => void,
  hideBackArrow: boolean,
  title?: string
  subTitle?: string
}

class LoginHeader extends Component<IProps> {
  render() {

    const { navigateBack, hideBackArrow, title, subTitle } = this.props

    return (
      <SafeAreaView>
        <Container>
          <IconWrapper onPress={() => navigateBack && navigateBack()} underlayColor='transparent' activeOpacity={0.5}>
            {!hideBackArrow ? (<Arrow name='angle-left' iconColour={colours.white.base} />) : (<></>)}
          </IconWrapper>
        </Container>
        <ScreenHeader title={title} colour={colours.white.base} subText={subTitle} addMargin />
      </SafeAreaView>
    )
  }
}

export default LoginHeader
