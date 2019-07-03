import Calendar from '@views/middle/calendar'
import DiaryDetail from '@views/middle/diaryDetail'
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
    DiaryDetail: {
      screen: DiaryDetail,
      navigationOptions: {
        headerRight: <MenuIcon />,
        headerLeft: <BackArrow destination={'StartDashboard'} />
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
