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
            label='The Start'
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
            label='The Middle'
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
            label='The End'
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
        height: 80,
        borderTopWidth: 0,
        borderTopColor: colours.olive.base,
        backgroundColor: colours.white.base,
      },
      showIcon: true,
      showLabel: false,
      safeAreaInset: { bottom: 'always', top: 'never' },
    },
  },
)

export default FooterTabNavigator
