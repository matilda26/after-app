import Dashboard from '@views/dashboard'
import LoginScreen from '@views/login'
import React from 'react'
import { createStackNavigator } from 'react-navigation'

const HomeStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Dashboard,
      navigationOptions: {
        header: null,
      },
    },
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      // headerStyle: {
      //   backgroundColor: colours.white.base,
      //   height: 50,
      //   borderBottomWidth: 1,
      //   borderBottomColor: colours.lightGrey.base,
      //   paddingTop: spacing.xl,
      // },
      //   headerTitle: <Logo />,
    },
  },
)

export default HomeStack
