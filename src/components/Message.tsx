import React, { useEffect } from 'react'
import { Layout, PageHeader, Tooltip, Button, Row, Divider, Space } from 'antd'
import {
  PrinterFilled,
  ExportOutlined,
  StarOutlined,
  MoreOutlined,
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { ReactComponent as ReplyIcon } from '../assets/reply.svg'
import { ReactComponent as ForwardIcon } from '../assets/forward.svg'
import { ReactComponent as NewWindow } from '../assets/new-window.svg'

import { fetchMessage } from '../actions/messageActions'

import type * as type from '../types/Gmail'

const { Header, Footer, Sider, Content } = Layout

interface MessageProps {
  dispatch: any
  loading: boolean
  message: type.Message
  hasErrors: boolean
  // messageId: Record<string, unknown>
  messageId?: string
}

const Message: React.FC<MessageProps> = ({
  dispatch,
  loading,
  message,
  hasErrors,
  messageId,
}) => {
  const handleAction = (action: string): void => {
    console.log(action)
  }

  // useEffect(() => {
  //   console.log(`messageId`, messageId)
  // }, [messageId])

  useEffect(() => {
    if (messageId) {
      dispatch(fetchMessage(messageId))
    }
  }, [dispatch, messageId])

  if (!messageId) {
    return (
      <Layout>
        <Content className="message-body no-selection">
          <div className="page-layout-content">No conversations selected</div>
        </Content>
      </Layout>
    )
  }

  return (
    <Layout className="message-section">
      <PageHeader
        className="message-header"
        ghost={false}
        // title="New Compiler Version Available"
        title={message?.subject}
        extra={[
          <Tooltip title="Print all" key="1">
            <Button
              type="text"
              shape="circle"
              icon={<PrinterFilled />}
              onClick={() => handleAction('Print message')}
            />
          </Tooltip>,
          <Tooltip title="In new window" key="2">
            <Button
              type="text"
              shape="circle"
              // icon={<ExportOutlined />}
              icon={<NewWindow />}
              onClick={() => handleAction('In new window')}
            />
          </Tooltip>,
        ]}
      >
        <Row className="sub-header">
          {/* <span>{'Grace Hopper <grace.hopper@example.com>'}</span> */}
          <span>{message?.from}</span>
          <span>
            {/* Sun, 20 Jun 2021 09:45:30 -0600 */}
            {message?.date}
            <Space size={2}>
              <Tooltip title="Not stared">
                <Button type="text" shape="circle" icon={<StarOutlined />} />
              </Tooltip>
              <Tooltip title="Reply">
                <Button type="text" shape="circle" icon={<ReplyIcon />} />
              </Tooltip>
              <Tooltip title="More">
                <Button type="text" shape="circle" icon={<MoreOutlined />} />
              </Tooltip>
            </Space>
          </span>
        </Row>
        <Divider />
      </PageHeader>
      <Content className="message-body">
        <div>
          {/* {
            'Version 123 of our compiler is out! Please have a look and let us know any feedback.\n\nGrace'
          } */}
          {message?.body}
        </div>
        <Space className="msg-btn-icon">
          <Button icon={<ReplyIcon />}>Reply</Button>
          <Button icon={<ForwardIcon />}>Forward</Button>
        </Space>
      </Content>
    </Layout>
  )
}

const mapStateToProps = (state: type.messageState) => {
  return {
    loading: state.message.loading,
    message: state.message.message,
    hasErrors: state.message.hasErrors,
  }
}

export default connect(mapStateToProps)(Message)

Message.defaultProps = {
  messageId: undefined,
}
