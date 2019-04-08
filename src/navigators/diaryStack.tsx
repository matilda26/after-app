import DiaryListing from '@views/diary/diaryListing'
import DiaryDetail from '@views/diary/diaryDetail'
import { createStackNavigator } from 'react-navigation'

const DiaryStack = createStackNavigator(
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
        header: null,
      },
    },
  }, {
    initialRouteName: 'DiaryListing',
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

export default DiaryStack
