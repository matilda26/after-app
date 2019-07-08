import Calendar from '@views/middle/calendar'
import DayDetail from '@views/middle/dayDetail'
import { createStackNavigator } from 'react-navigation'
import Logo from '@components/navigation/headerLogo'
import { colours, spacing, typeSizes, fonts } from '@styles/index'
import React from 'react'
import BackArrow from '@components/navigation/backArrow'
import MenuIcon from '@components/navigation/menuIcon'

const MiddleStack = createStackNavigator(
  {
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        headerRight: <MenuIcon />
      }
    },
    DayDetail: {
      screen: DayDetail,
      navigationOptions: {
        headerRight: <MenuIcon />,
        headerLeft: <BackArrow destination={'Calendar'} type='diary'/>
      }
    },

  }, {
    initialRouteName: 'Calendar',
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

export default MiddleStack
