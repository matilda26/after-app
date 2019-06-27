import React, { Component } from 'react'
import { Wrapper } from './styles'
import LottieView from 'lottie-react-native'

export interface IProps {

}

class BlobLoader extends Component<IProps> {

  render() {
    return (
      <Wrapper>
        <LottieView source={require('./blob-loader.json')} autoPlay loop />
      </Wrapper>
    )
  }
}

export default BlobLoader
