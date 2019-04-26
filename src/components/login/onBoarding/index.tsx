import React, { Component } from 'react'
import {
  OnBoarding,
  OnBoardingCopy,
  OnBoardingCopyWrapper,
  OnBoardingImage,
  OnBoardingImageWrapper,
  Wrapper,
} from './styles'

// const illustration = require('../../../assets/illu-login.png')s

class OnBoardingSection extends Component {
  render() {
    return (
      <Wrapper>
        <OnBoarding>
          <OnBoardingImageWrapper>
            {/* <OnBoardingImage source={illustration} /> */}
          </OnBoardingImageWrapper>
          <OnBoardingCopyWrapper>
            <OnBoardingCopy fontColor='dark'>Set <OnBoardingCopy fontColor='dark' bold={true}>fitness goals</OnBoardingCopy>,
            track your <OnBoardingCopy fontColor='dark' bold>mood</OnBoardingCopy> and get access to <OnBoardingCopy fontColor='dark' bold>exclusive wellness content</OnBoardingCopy>
            </OnBoardingCopy>
          </OnBoardingCopyWrapper>
        </OnBoarding>
      </Wrapper>
    )
  }
}

export default OnBoardingSection
