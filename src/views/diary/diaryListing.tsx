import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from '@components/icon';

interface IProps {

}

class DiaryListing extends Component<IProps> {

    render() {
        return (
            <View>
                <Text>Diary home</Text>
                <Icon name='diamond' />
            </View>
        )
    }
}

export default DiaryListing
