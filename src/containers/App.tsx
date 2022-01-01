// External imports
import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

// Local imports
import PageLoader from '../components/PageLoader'
import AppHeader from '../components/AppHeader'
import FolderMenu from '../components/FolderMenu'
import EmailList from '../components/EmailList'
import Message from '../components/Message'
import Settings from '../components/Settings'
import AddOnSider from '../components/AddOnSider'

// State
import { fetchFolders } from '../actions/foldersActions'

// Types
import type * as type from '../types/GMail'

const { Content } = Layout

interface AppProps {
  dispatch: any
  loading: boolean
  folders: type.Folders
  hasErrors: boolean
}

const App = ({
  dispatch,
  loading,
  folders,
  hasErrors,
}: AppProps): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false)
  const [settings, setSettings] = useState(true)
  const [messageId, setMessageId] = useState<string | null>(null)

  useEffect(() => {
    dispatch(fetchFolders())
  }, [dispatch])

  // show loading, error, or success state
  const renderPage = () => {
    if (loading) return <PageLoader />
    if (hasErrors) return <p>Network error. Unable to display Mail</p>
    return (
      <Layout>
        <AppHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          settings={settings}
          setSettings={setSettings}
        />
        <Layout>
          <FolderMenu collapsed={collapsed} />
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

  return renderPage()
}

const mapStateToProps = (state: type.foldersState) => {
  return {
    loading: state.folders.loading,
    folders: state.folders.folders,
    hasErrors: state.folders.hasErrors,
  }
}

export default connect(mapStateToProps)(App)
