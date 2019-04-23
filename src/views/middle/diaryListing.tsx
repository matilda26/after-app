import React, { Component } from 'react'
import PageHeader from '@components/screenHeader'
import ScreenWrapper from '@components/screenWrapper'

interface IProps {

}

class DiaryListing extends Component<IProps> {

    render() {
        return (
            <ScreenWrapper>
                <PageHeader subText="What's happening now? Right here in this moment." />
            </ScreenWrapper>
        )
    }
}

export default DiaryListing
