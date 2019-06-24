import React, { Component } from 'react'
import MainButton from '@components/mainButton'
import MainTab from '@components/mainTab'
import { Illustration, ImageContainer, ImageWrapper, ListFooter, ListWrapper, Separator } from './styles'
import ScreenHeader from '@components/screenHeader'
import { colours } from '@styles/index'
import ScreenWrapper from '@components/screenWrapper'

interface IProps {

}

const ButtonData = [
	{
		label: 'The facts',
		subLabel: "Let's lay down the foundations and get get all the facts straight.",
		progressTarget: 12,
		progressValue: 3,
	},
	{
		label: 'Favourite things',
		subLabel: 'Everything from music to food, we want to know it all.',
		progressTarget: 12,
		progressValue: 6,
	},
	{
		label: 'Education',
		subLabel: "Where did you go and what did you study? Have you done any short courses?",
		progressTarget: 12,
		progressValue: 12,
	},
	{
		label: 'Special people',
		subLabel: "Let's take the time to reflect on the awesome people in your life.",
		progressTarget: 12,
		progressValue: 9,
	},
	{
		label: 'Career',
		subLabel: 'Across the Sahara Desert, through the Amazon rainforest. I want to hear it all.',
		progressTarget: 12,
		progressValue: 7,
	},
	{
		label: 'Places',
		subLabel: 'Across the Sahara Desert, through the Amazon rainforest. I want to hear it all.',
		progressTarget: 12,
		progressValue: 2,
	},
]

const illustration = require('../../../assets/start-placeholder.png')
class StartDashboard extends Component<IProps> {

	render() {
		return (
			<ScreenWrapper>
				<ScreenHeader
					title="The Start"
					subText="This section is all about capturing the essence of you.  The start of your journey and how that makes you unique - the true you."
					colour={colours.olive.base}
					align='left'
				/>
				<ImageContainer>
					<ImageWrapper>
						<Illustration source={illustration} />
					</ImageWrapper>
				</ImageContainer>
				<ListWrapper
					data={ButtonData}
					renderItem={({ item }) => (
						<MainTab
							label={item.label}
							subLabel={item.subLabel}
							key={item.index}
							progressTarget={item.progressTarget}
							progressValue={item.progressValue}
						/>
					)}
					ItemSeparatorComponent={() => <Separator />}
					keyExtractor={item => item.label}
					listFooterComponent={() => <ListFooter />}
				/>
			</ScreenWrapper>
		)
	}
}

export default StartDashboard
