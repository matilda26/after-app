import Dashboard from '@views/dashboard'
import { createStackNavigator } from 'react-navigation'

const DashboardStack = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: null,
      },
    },
  }, {
    initialRouteName: 'Dashboard',
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

export default DashboardStack
