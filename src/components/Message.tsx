import React from 'react'
import { Layout, PageHeader } from 'antd'

const { Header, Footer, Sider, Content } = Layout

const Message: React.FC<Record<string, unknown>> = ({ messageId }) => {
  return (
    <Layout>
      <PageHeader title="Subject" ghost={false}>
        This is the header
      </PageHeader>
      <Content>{JSON.stringify(messageId)}</Content>
    </Layout>
  )
}

export default Message
