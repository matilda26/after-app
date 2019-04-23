import DiaryListing from '@views/middle/diaryListing'
import DiaryDetail from '@views/middle/diaryDetail'
import { createStackNavigator } from 'react-navigation'
import { colours, spacing, typeSizes, fonts } from '@styles/index'

const MiddleStack = createStackNavigator(
  {
    DiaryDetail: {
      screen: DiaryDetail,
      navigationOptions: {
        header: null,
      },
    },
    DiaryListing: {
      screen: DiaryListing,
      navigationOptions: {
        title: 'The Middle',
      },
    },
  }, {
    initialRouteName: 'DiaryListing',
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

export default MiddleStack
