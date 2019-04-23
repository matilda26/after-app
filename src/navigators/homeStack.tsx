import LoginScreen from '@views/login'
import { createStackNavigator } from 'react-navigation'
import FooterTabNavigator from '@navigators/footerTabNavigator'

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
  },
)

export default HomeStack
