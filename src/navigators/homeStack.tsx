import LoginScreen from '@views/login'
import { createStackNavigator } from 'react-navigation'
import FooterTabNavigator from '@navigators/footerTabNavigator'
import { colours, spacing } from '@styles/index'
import Logo from '@components/navigation/headerLogo'
import MenuIcon from '@components/navigation/menuIcon'
import React from 'react'

const HomeStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: FooterTabNavigator,
      navigationOptions: {
        header: null,
      },
    },
  }, {
    initialRouteName: 'Home',
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: colours.cream.light,
    //     height: 50,
    //     borderBottomColor: colours.cream.light,
    //     paddingTop: spacing.xl,
    //   },
    //   headerTitle: <Logo />,
    // },
  },
)

export default HomeStack
