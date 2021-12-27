import React, { useState, useEffect } from 'react'
import { Layout, Menu, Input } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InboxOutlined,
  DeleteOutlined,
  UserOutlined,
  MailOutlined,
  UnorderedListOutlined,
  SendOutlined,
  ExclamationCircleOutlined,
  FormOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import EmailList from '../components/EmailList'

import { fetch, getFolders } from '../utils/api'

const { Header, Footer, Sider, Content } = Layout

function App(): React.ReactElement {
  const [loading, setLoading] = useState(true)
  const [folders, setFolders] = useState<Array<string>>([])
  const [collapsed, setCollapsed] = useState(false)
  const [settings, setSettings] = useState(true)
  // const [folderData, fetchFolderData] = useFolders()

  const fetchData = async () => {
    // ES6 then/catch
    // fetch('/folders')
    //   .then((res) => res.json())
    //   .then((json) => setFolders(json))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false))

    // ES7 async/await
    try {
      const response = await fetch('/folders')
      const json = await response.json()
      setFolders(json)
    } catch (err) {
      console.log(`err`, err)
    } finally {
      setLoading(false)
    }
  }

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }
  const handleSettings = () => {
    setSettings(!settings)
  }

  // const folderIcons = [<InboxOutlined />, <UserOutlined />]
  const folderIcons: Record<string, React.ReactNode> = {
    Inbox: <InboxOutlined />,
    Trash: <DeleteOutlined />,
    'Work Emails': <MailOutlined />,
    'Mailing Lists': <UnorderedListOutlined />,
    Sent: <SendOutlined />,
    Spam: <ExclamationCircleOutlined />,
    Drafts: <FormOutlined />,
    Personal: <UserOutlined />,
  }

  useEffect(() => {
    fetchData()
    // console.log(`getFolders()`, getFolders())
  }, [])

  const Logo: React.FC = () => {
    return (
      <div className="logo">
        <img src="images/logo.jpg" alt="logo" />
      </div>
    )
  }

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <Layout>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: handleToggle,
          }
        )}
        <Logo />
        <Input
          size="large"
          placeholder="Search mail"
          prefix={<SearchOutlined />}
          className="search-input"
        />
        <SettingOutlined
          style={{ fontSize: '20px' }}
          className="settings"
          onClick={handleSettings}
        />
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          <Menu
            // theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            {folders.map((folder) => {
              return (
                <Menu.Item key={folder} icon={folderIcons[folder]}>
                  {folder}
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <EmailList />
          </Content>
          <Sider
            trigger={null}
            collapsible
            collapsed={settings}
            theme="light"
            collapsedWidth={0}
          >
            These are settings
          </Sider>
        </Layout>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App
