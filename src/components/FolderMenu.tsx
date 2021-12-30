// External imports
import React, { useEffect } from 'react'
import { Layout, Menu, Button } from 'antd'
import { connect } from 'react-redux'

// Local imports
import PageLoader from './PageLoader'
import { folderIcons } from '../utils/iconUtils'

import { fetchFolders } from '../actions/foldersActions'
import { fetchFolderMessages } from '../actions/folderMessagesActions'

// Types
import type * as type from '../types/Message'

const { Sider } = Layout

interface FolderMenuProps {
  dispatch: any
  loading: boolean
  folders: type.folders
  hasErrors: boolean
  collapsed: boolean
}

const FolderMenu: React.FC<FolderMenuProps> = ({
  dispatch,
  loading,
  folders,
  hasErrors,
  collapsed,
}) => {
  // BUG: causing continuous refresh
  // useEffect(() => {
  //   dispatch(fetchFolders())
  //   // console.log(`folders`, folders)
  // }, [dispatch])
  // const collapsed = false

  const renderMenu = () => {
    if (loading) return <PageLoader />
    if (hasErrors) return <p>Network error. Unable to display Mail</p>
    return (
      <div className="folder-menu">
        <Menu
          // theme="dark"
          mode="inline"
          defaultSelectedKeys={['Inbox']}
        >
          {Object.values(folders).map((folder) => {
            return (
              <Menu.Item
                key={folder}
                icon={folderIcons[folder]}
                className="folders"
                onClick={(menu) => {
                  console.log(`Clicked "${menu.key}" folder`)
                  dispatch(fetchFolderMessages(menu.key))
                }}
              >
                {folder}
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    )
  }

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
          onClick={() => {
            console.log('Compose new message')
            console.log(`
// Simple POST request with a JSON body using fetch
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'POST Email Message' })
};
fetch('https://reqres.in/api/posts', requestOptions)
    .then(response => response.json())
    .then(data => this.setState({ postId: data.id }));
            `)
          }}
        >
          <img src="images/create_32dp.png" alt="Compose message" />
          {!collapsed && 'Compose'}
        </Button>
      </div>
      {renderMenu()}
    </Sider>
  )
}

const mapStateToProps = (state: type.foldersState) => {
  return {
    loading: state.folders.loading,
    folders: state.folders.folders,
    hasErrors: state.folders.hasErrors,
  }
}

export default connect(mapStateToProps)(FolderMenu)
