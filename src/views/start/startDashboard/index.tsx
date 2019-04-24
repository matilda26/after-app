import React, { Component } from 'react'
import MainButton from '@components/mainButton'
import MainTab from '@components/mainTab'
import { ButtonWrapper, Separator } from './styles'

interface IProps {

}

const ButtonData = [
	{
		label: 'The facts',
		subLabel: 'Across the Sahara Desert, through the Amazon rainforest. I want to hear it all.',
		image: require('./start-places.png'),
	},
	{
		label: 'Favourite things',
		subLabel: 'Across the Sahara Desert, through the Amazon rainforest. I want to hear it all.',
		image: require('./start-places.png'),
	},
	{
		label: 'Education',
		subLabel: "Where did you go and what did you study? Have you done any short courses?",
		image: require('./start-education.png'),
	},
	{
		label: 'Special people',
		subLabel: "Let's take the time to reflect on the awesome people in your life.",
		image: require('./start-friends.png'),
	},
	{
		label: 'Career',
		subLabel: 'Across the Sahara Desert, through the Amazon rainforest. I want to hear it all.',
		image: require('./start-places.png'),
	},
	{
		label: 'Places',
		subLabel: 'Across the Sahara Desert, through the Amazon rainforest. I want to hear it all.',
		image: require('./start-places.png'),
	},
]

class StartDashboard extends Component<IProps> {

	render() {
		return (
			<>
				<ButtonWrapper
					data={ButtonData}
					renderItem={({ item }) => (
						<MainTab
							label={item.label}
							subLabel={item.subLabel}
							key={item.index}
						/>
					)}
					ItemSeparatorComponent={() => <Separator />}
					keyExtractor={item => item.label}
				/>
				{/* <ListWrapper
				data={ButtonData}
				// ItemSeparatorComponent={() => <Separator />}
				horizontal
				// pagingEnabled={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					// <AnimatedContainer index={item.index}>
					<MainButton
						image={item.image}
						label={item.label}
						subLabel={item.subLabel}
						key={item.index}
					/>
					// </AnimatedContainer>
				)}
				keyExtractor={item => item.label}
			/> */}
				{/* <PageHeader subText={"Let's start with the beginning of you."} /> */}
			</>
		)
	}
}

export default StartDashboard
