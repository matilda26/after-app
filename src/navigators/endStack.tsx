import EndDashboard from '@views/end/endDashboard'
import { colours, spacing, typeSizes, fonts } from '@styles/index'
import { createStackNavigator } from 'react-navigation'

const EndStack = createStackNavigator(
  {
    EndDashboard: {
      screen: EndDashboard,
      navigationOptions: {
        title: 'The End',
      },
    },
  }, {
    initialRouteName: 'EndDashboard',
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

export default EndStack
