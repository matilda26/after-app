import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Login from '@components/login'

interface IProps {

}

class LoginScreen extends Component<IProps> {

    render() {
        return (
            <View>
                <Login />
            </View>
        )
    }
}

export default LoginScreen
