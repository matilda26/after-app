import React, { Component } from 'react'
import { IconItem, Label, Wrapper } from './styles'

export interface IProps {
  iconName: any
  focused: boolean
  label: string
}

class IconTabItem extends Component<IProps> {

  render() {

    const {
      iconName,
      focused,
      label
    } = this.props

    return (
      <Wrapper
        focused={focused}
      >
        <IconItem
          name={iconName}
          focused={focused}
        />
        <Label focused={focused}>{label}</Label>
      </Wrapper>
    )
  }
}

export default IconTabItem
