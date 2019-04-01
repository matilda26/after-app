import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from '@components/icon';

interface IProps {

}

class Dashboard extends Component<IProps> {

    render() {
        return (
            <View>
                <Text>Hello Dashboard</Text>
                <Icon name='diamond' />
            </View>
        )
    }
}

export default Dashboard
