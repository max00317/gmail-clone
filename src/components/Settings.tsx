import React from 'react'
import { Layout } from 'antd'

const { Sider } = Layout

interface SettingsProps {
  settings: boolean
}

const Settings: React.FC<SettingsProps> = ({ settings }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={settings}
      theme="light"
      collapsedWidth={0}
      className="settings-sider"
    >
      <div className="settings-container">These are settings</div>
    </Sider>
  )
}

export default Settings
