import React from 'react'
import { Layout, Button, Tooltip, Space } from 'antd'
import {
  CalendarOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Footer, Sider, Content } = Layout

const AddOnSider = () => {
  const handleAction = (msg: string) => console.log(msg)

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed
      theme="light"
      collapsedWidth={55}
      className="app-btn-column"
    >
      <Space direction="vertical" size="large" className="app-btn">
        <Tooltip title="Calendar">
          <Button
            type="primary"
            shape="circle"
            icon={<CalendarOutlined />}
            size="small"
            onClick={() => handleAction('Calendar click')}
          />
        </Tooltip>
        <Tooltip title="Keep Notes">
          <Button
            type="primary"
            shape="circle"
            icon={<BulbOutlined />}
            size="small"
            onClick={() => handleAction('Keep Notes click')}
          />
        </Tooltip>
        <Tooltip title="Tasks">
          <Button
            type="primary"
            shape="circle"
            icon={<CheckCircleOutlined />}
            size="small"
            onClick={() => handleAction('Tasks click')}
          />
        </Tooltip>
        <Tooltip title="Contacts">
          <Button
            type="primary"
            shape="circle"
            icon={<UserOutlined />}
            size="small"
            onClick={() => handleAction('Contacts click')}
          />
        </Tooltip>
      </Space>
    </Sider>
  )
}

export default AddOnSider
