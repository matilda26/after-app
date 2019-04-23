import StartDashboard from '@views/start/startDashboard'
import { createStackNavigator } from 'react-navigation'
import { colours, spacing, typeSizes, fonts } from '@styles/index'

const StartStack = createStackNavigator(
  {
    StartDashboard: {
      screen: StartDashboard,
      navigationOptions: {
        title: 'The Start'
      },
    },
  }, {
    initialRouteName: 'StartDashboard',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colours.white.base,
        height: 50,
        shadowOpacity: 0,
        elevation: 0,
        paddingTop: spacing.xl,
        borderBottomWidth: 2,
        borderBottomColor: colours.olive.base,
      },
      headerTitleStyle: {
        color: colours.olive.base,
        fontSize: typeSizes.h2,
        zIndex: 10,
        fontFamily: fonts.bold
      },
    },
  },
)

export default StartStack
