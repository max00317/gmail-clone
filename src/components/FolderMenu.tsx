import React from 'react'
import { Layout, Menu, Button } from 'antd'
import { folderIcons } from '../utils/iconUtils'

const { Sider } = Layout

interface FolderMenuProps {
  collapsed: boolean
  folders: string[]
}

const FolderMenu: React.FC<FolderMenuProps> = ({ collapsed, folders }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      className="folder-sider"
    >
      <div>
        <Button
          shape="round"
          className={collapsed ? 'compose-btn collapsed' : 'compose-btn'}
          onClick={() => console.log('Compose new message')}
        >
          <img src="images/create_32dp.png" alt="Compose message" />
          {!collapsed && 'Compose'}
        </Button>
      </div>
      <div className="folder-menu">
        <Menu
          // theme="dark"
          mode="inline"
          defaultSelectedKeys={['Inbox']}
        >
          {folders.map((folder) => {
            return (
              <Menu.Item
                key={folder}
                icon={folderIcons[folder]}
                className="folders"
              >
                {folder}
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    </Sider>
  )
}

export default FolderMenu
