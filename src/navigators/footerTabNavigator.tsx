import IconTabItem from '@components/navigation/iconTabItem'
import DashboardStack from '@navigators/dashboardStack'
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import DiaryStack from './diaryStack'
import { colours } from '@styles/index'

const FooterTabNavigator = createBottomTabNavigator(
  {
    Diary: {
      screen: DiaryStack,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }: { focused: boolean }) => (
          <IconTabItem
            iconName={'diary-tab'}
            tabName='Premium'
            focused={focused}
          />
        ),
        tabBarOnPress: ({ defaultHandler }) => {
          defaultHandler()
        },
      },
    },
    Home: {
      screen: DashboardStack,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }: { focused: boolean }) => (
          <IconTabItem
            iconName={focused ? 'mood-tab-active' : 'mood-tab'}
            tabName='Home'
            focused={focused}
          />
        ),
        tabBarOnPress: ({ defaultHandler }) => {
          defaultHandler()
        },
        // headerRight: <SettingsIcon />,
      },
    },
    // Goals: {
    //   screen: GoalStack,
    //   navigationOptions: {
    //     header: null,
    //     tabBarIcon: ({ focused }: { focused: boolean }) => (
    //       <IconTabItem
    //         iconName={focused ? 'star-active' : 'star'}
    //         tabName='Goals'
    //         focused={focused}
    //       />
    //     ),
    //     tabBarOnPress: ({ navigation }) => {
    //       navigation.setParams({ previousRoute: 'GoalListing' })
    //       navigation.navigate('GoalListing')
    //     },
    //   },
    // },
  }, {
    initialRouteName: 'Home',
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: colours.white.base,
    //     height: 50,
    //     borderBottomWidth: 0,
    //     paddingTop: spacing.xl,
    //   },
    //   headerTitle: <Logo />,
    // },
    tabBarOptions: {
      style: {
        height: 60,
        borderTopWidth: 1,
        borderTopColor: colours.olive.base,
      },
      showIcon: true,
      showLabel: false,
      activeBackgroundColor: colours.olive.base,

      safeAreaInset: { bottom: 'never', top: 'never' }
    },
  },
)

export default FooterTabNavigator
