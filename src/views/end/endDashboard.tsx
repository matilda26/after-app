import React, { Component } from 'react'
import PageHeader from '@components/screenHeader'
import ScreenWrapper from '@components/screenWrapper'

interface IProps {

}

class EndDashboard extends Component<IProps> {

    render() {
        return (
            <ScreenWrapper>
                <PageHeader subText={"Your final wishes."} />
            </ScreenWrapper>
        )
    }
}

export default EndDashboard
