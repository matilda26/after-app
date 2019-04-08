import React, { Component } from 'react'
import { IconItem, Label, Wrapper } from './styles'

export interface IProps {
  iconName: any
  tabName: string
  focused: boolean
}

class IconTabItem extends Component<IProps> {

  render() {

    const {
      iconName,
      tabName,
      focused,
    } = this.props

    return (
      <Wrapper
        focused={focused}
      >
        <IconItem
          name={iconName}
          focused={focused}
        />
        {/* <Label
          focused={focused}
        >
          {tabName}
        </Label> */}
      </Wrapper>
    )
  }
}

export default IconTabItem
