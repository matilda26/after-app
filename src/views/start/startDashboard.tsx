import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PageHeader from '@components/screenHeader';
import ScreenWrapper from '@components/screenWrapper';

interface IProps {

}

class StartDashboard extends Component<IProps> {

    render() {
        return (
            <ScreenWrapper>
                <PageHeader title={'The Start'} subText={"Let's start with the beginning of you."} />
            </ScreenWrapper>
        )
    }
}

export default StartDashboard
