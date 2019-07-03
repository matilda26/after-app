import StartDashboard from '@views/start/startDashboard'
import { createStackNavigator } from 'react-navigation'
import { colours, spacing, typeSizes, fonts } from '@styles/index'
import StartFacts from '@views/start/startFacts'
import React from 'react'
import BackArrow from '@components/navigation/backArrow'
import Logo from '@components/navigation/headerLogo'
import MenuIcon from '@components/navigation/menuIcon'
import SettingsScreen from '@views/settings';

const StartStack = createStackNavigator(
  {
    StartDashboard: {
      screen: StartDashboard,
      navigationOptions: {
        headerRight: <MenuIcon />
      }
    },
    StartFacts: {
      screen: StartFacts,
      navigationOptions: {
        headerRight: <MenuIcon />,
        headerLeft: <BackArrow destination={'StartDashboard'} />
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
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
