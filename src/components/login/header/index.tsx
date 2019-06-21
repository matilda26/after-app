import { Arrow } from '@components/navigation/backArrow/styles'
import ScreenHeader from '@components/screenHeader'
import { colours } from '@styles/index'
import React, { Component } from 'react'
import { Container, IconWrapper, Label, LeftButton } from './styles'
import { SafeAreaView } from 'react-native'

interface IProps {
  navigateBack?: () => void,
  showBackArrow: boolean,
  title?: string
  subTitle?: string
  backLabel?: string
  colour?: string
}

class LoginHeader extends Component<IProps> {
  render() {

    const { navigateBack, showBackArrow, title, subTitle, backLabel, colour } = this.props

    return (
      <SafeAreaView>
        <Container>
          {showBackArrow && (
            <LeftButton onPress={() => navigateBack && navigateBack()} underlayColor='transparent' activeOpacity={0.5}>
              <IconWrapper>
                <Arrow name='angle-left' iconColour={colour} />
                <Label colour={colour}>{backLabel}</Label>
              </IconWrapper>
            </LeftButton>
          )}
        </Container>
        <ScreenHeader title={title} colour={colour} subText={subTitle} align='center' />
      </SafeAreaView>
    )
  }
}

export default LoginHeader
