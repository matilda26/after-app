import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from '@components/icon';

interface IProps {

}

class DiaryDetail extends Component<IProps> {

    render() {
        return (
            <View>
                <Text>Diary Day</Text>
                <Icon name='diamond' />
            </View>
        )
    }
}

export default DiaryDetail
