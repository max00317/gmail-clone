import React from 'react'
import {
  InboxOutlined,
  DeleteOutlined,
  UserOutlined,
  MailOutlined,
  UnorderedListOutlined,
  SendOutlined,
  ExclamationCircleOutlined,
  FormOutlined,
} from '@ant-design/icons'

export const folderIcons: Record<string, React.ReactNode> = {
  Inbox: <InboxOutlined />,
  Trash: <DeleteOutlined />,
  'Work Emails': <MailOutlined />,
  'Mailing Lists': <UnorderedListOutlined />,
  Sent: <SendOutlined />,
  Spam: <ExclamationCircleOutlined />,
  Drafts: <FormOutlined />,
  Personal: <UserOutlined />,
}
