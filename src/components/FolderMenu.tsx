// External imports
import React, { useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import { connect } from 'react-redux'

// Local imports
import ComposeModal from './ComposeModal'
import SectionSpin from './SectionSpin'
import { folderIcons } from '../utils/iconUtils'

// import { fetchFolders } from '../actions/foldersActions'
import { fetchFolderMessages } from '../actions/folderMessagesActions'

// Types
import type * as type from '../types/Gmail'

const { Sider } = Layout

interface FolderMenuProps {
  dispatch: any
  loading: boolean
  folders: type.Folders
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

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)
  const handleOk = () => setIsModalVisible(false)
  const handleCancel = () => setIsModalVisible(false)

  const renderMenu = () => {
    if (loading) return <SectionSpin className="folder-menu" />
    if (hasErrors) return <p>Mock network error. Unable to display mail</p>
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
            showModal()
          }}
        >
          <img src="images/create_32dp.png" alt="Compose message" />
          {!collapsed && 'Compose'}
        </Button>
      </div>
      {renderMenu()}
      <ComposeModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loading={loading}
      />
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
