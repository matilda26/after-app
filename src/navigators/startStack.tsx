import StartDashboard from '@views/start/startDashboard/index'
import { createStackNavigator } from 'react-navigation'
import { colours, spacing, typeSizes, fonts } from '@styles/index'
import StartFacts from '@views/start/startFacts'
import React from 'react'
import BackArrow from '@components/navigation/backArrow'
import Logo from '@components/navigation/headerLogo'
import MenuIcon from '@components/navigation/MenuIcon';

const StartStack = createStackNavigator(
  {
    StartDashboard: {
      screen: StartDashboard,
      headerRight: <MenuIcon />
    },
    StartFacts: {
      screen: StartFacts,
      navigationOptions: {
        headerRight: <MenuIcon />,
        headerLeft: <BackArrow destination={'StartDashboard'} />
      }
    }
  }, {
    initialRouteName: 'StartDashboard',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colours.cream.light,
        height: 50,
        borderBottomColor: colours.cream.light,
        paddingTop: spacing.xl,
      },
      headerTitle: <Logo />,
    },
  },
)

export default StartStack
