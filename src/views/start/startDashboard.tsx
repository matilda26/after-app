import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { colours } from '@styles/index'
import PageHeader from '@components/screenHeader'
import MainButton from '@components/mainButton'

interface IProps {

}

const ButtonData = [
	{
		label: 'The simple facts',
		icon: 'mood-tab',
		colour: colours.olive.base,
	},
	{
		label: 'My favourite things',
		icon: 'mood-tab',
		colour: colours.olive.base,
	},
	{
		label: 'A select few',
		icon: 'mood-tab',
		colour: colours.olive.base,
	},
	{
		label: 'Education',
		icon: 'mood-tab',
		colour: colours.olive.base,
	},
	{
		label: 'Oh yeah, that job',
		icon: 'mood-tab',
		colour: colours.olive.base,
	},
	{
		label: 'Been there, done that',
		icon: 'mood-tab',
		colour: colours.olive.base,
	},
]

const Separator = () => (
	<View style={{ height: 2 }} />
)
class StartDashboard extends Component<IProps> {

	render() {
		return (
			<FlatList
				data={ButtonData}
				ItemSeparatorComponent={() => <Separator />}
				renderItem={({ item }) => (
					// <AnimatedContainer index={item.index}>
					<MainButton
						icon={item.icon}
						label={item.label}
						active={false}
						colour={item.colour}
					/>
					// </AnimatedContainer>
				)}
				keyExtractor={item => item.index}
			/>
			// <PageHeader subText={"Let's start with the beginning of you."} />
		)
	}
}

export default StartDashboard
