import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import AppHeader from '../components/AppHeader'
import FolderMenu from '../components/FolderMenu'
import EmailList from '../components/EmailList'
import Message from '../components/Message'
import Settings from '../components/Settings'
import AddOnSider from '../components/AddOnSider'

import { fetch } from '../utils/api'
// import { folderIcons } from '../utils/iconUtils'
// import { _getFolders } from '../utils/_DATA'

const { Content } = Layout

function App(): React.ReactElement {
  const [loading, setLoading] = useState(true)
  const [folders, setFolders] = useState<Array<string>>([])
  const [collapsed, setCollapsed] = useState(false)
  const [settings, setSettings] = useState(true)
  const [messageId, setMessageId] = useState<string | null>(null)
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
      // console.log(`json`, json)
      setFolders(Object.values(json))
    } catch (err) {
      console.log(`err`, err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <AppHeader
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        settings={settings}
        setSettings={setSettings}
      />
      <Layout>
        <FolderMenu collapsed={collapsed} folders={folders} />
        <Layout>
          <Content>
            <EmailList setMessageId={setMessageId} />
            <Message messageId={messageId} />
          </Content>
          <Settings settings={settings} />
        </Layout>
        <AddOnSider />
      </Layout>
    </Layout>
  )
}

export default App
