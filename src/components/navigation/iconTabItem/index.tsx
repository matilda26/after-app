import React, { Component } from 'react'
import { IconItem, Wrapper } from './styles'

export interface IProps {
  iconName: any
  focused: boolean
}

class IconTabItem extends Component<IProps> {

  render() {

    const {
      iconName,
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
      </Wrapper>
    )
  }
}

export default IconTabItem
