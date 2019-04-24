import IconTabItem from '@components/navigation/iconTabItem'
import MiddleStack from '@navigators/middleStack'
import StartStack from '@navigators/startStack'
import EndStack from '@navigators/endStack'
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { colours, spacing, typeSizes, fonts } from '@styles/index'

const FooterTabNavigator = createBottomTabNavigator(
  {
    StartTab: {
      screen: StartStack,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }: { focused: boolean }) => (
          <IconTabItem
            iconName={'start'}
            focused={focused}
          />
        ),
        tabBarOnPress: ({ defaultHandler }) => {
          defaultHandler()
        },
      },
    },
    MiddleTab: {
      screen: MiddleStack,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }: { focused: boolean }) => (
          <IconTabItem
            iconName={'middle'}
            focused={focused}
          />
        ),
        tabBarOnPress: ({ defaultHandler }) => {
          defaultHandler()
        },
      },
    },
    EndTab: {
      screen: EndStack,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }: { focused: boolean }) => (
          <IconTabItem
            iconName={'end'}
            focused={focused}
          />
        ),
        tabBarOnPress: ({ defaultHandler }) => {
          defaultHandler()
        },
      },
    },
  }, {
    initialRouteName: 'StartTab',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        height: 60,
        borderTopWidth: 0,
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
