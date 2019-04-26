import { Arrow } from '@components/navigation/backArrow/styles'
import { colours } from '@styles/index'
import React, { Component } from 'react'
import { Container, IconWrapper, Logo, LogoType, Wrapper } from './styles'

interface IProps {
  navigateBack: () => void,
  hideBackArrow: boolean,
}

class LoginHeader extends Component<IProps> {
  render() {
    return (
      <Wrapper>
        <Container>
          <IconWrapper onPress={() => this.props.navigateBack && this.props.navigateBack()} underlayColor='transparent' activeOpacity={0.5}>
            {!this.props.hideBackArrow ? (<Arrow name='angle-left' iconColour={colours.olive.base} />) : (<></>)}
          </IconWrapper>
        </Container>
      </Wrapper>
    )
  }
}

export default LoginHeader
