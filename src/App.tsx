import React, { Component } from 'react'
import RootStack from '@navigators/rootStack'
import { NavigationScreenProp } from 'react-navigation'


interface IProps {
    navigation: NavigationScreenProp<any, any>
}

class App extends Component<IProps> {
    render() {
        return (
            <RootStack
                navigation={this.props.navigation}
                screenProps={this.props}
            />
        )
    }
}

export default App