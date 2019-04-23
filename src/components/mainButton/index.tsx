import React, { Component } from 'react'
import { Wrapper, ButtonIcon, Label } from './styles'

export interface IProps {
  icon: string
  label: string
  active: boolean
  colour: string
}

class MainButton extends Component<IProps> {

  render() {

    const { active, icon, label, colour } = this.props
    return (
      <Wrapper colour={colour}>
        <ButtonIcon name={icon} active={active} />
        <Label active={active}>{label}</Label>
      </Wrapper>
    )
  }
}

export default MainButton
