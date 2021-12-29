import React, { useState, useEffect } from 'react'
import { Layout, Input, Tooltip, Button } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { ReactComponent as SliderIcon } from '../assets/slider.svg'

const { Header, Footer, Sider, Content } = Layout

interface HeaderProps {
  collapsed: boolean
  setCollapsed: (c: boolean) => void
  settings: boolean
  setSettings: (s: boolean) => void
}

// const AppHeader: React.FC<HeaderProps> = (props) => {
//   const { collapsed, setCollapsed, settings, setSettings } = props
const AppHeader: React.FC<HeaderProps> = ({
  collapsed,
  setCollapsed,
  settings,
  setSettings,
}) => {
  const handleToggle = () => {
    setCollapsed(!collapsed)
  }
  const handleSettings = () => {
    setSettings(!settings)
  }

  const Logo: React.FC = () => {
    return (
      <div className="logo">
        <img src="images/logo.jpg" alt="logo" />
      </div>
    )
  }

  const handleAction = (msg: string) => console.log(msg)

  return (
    <Header className="site-layout-background">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: handleToggle,
      })}
      <Logo />
      <Input
        size="large"
        placeholder="Search mail"
        prefix={
          <Tooltip title="Search">
            <SearchOutlined />
          </Tooltip>
        }
        suffix={
          <Tooltip title="Extra information">
            <Button
              type="text"
              shape="circle"
              className="search-btn"
              icon={<SliderIcon />}
              onClick={() => handleAction('Click search options')}
            />
          </Tooltip>
        }
        className="search-input"
      />
      <SettingOutlined className="settings" onClick={handleSettings} />
    </Header>
  )
}

export default AppHeader
