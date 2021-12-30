import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'

import PageLoader from './PageLoader'
import EmptyArea from './EmptyArea'
import ActionButtons from './ActionButtons'

import { fetchFolderMessages } from '../actions/folderMessagesActions'

import type * as type from '../types/Message'

interface EmailListProps {
  dispatch: any
  loading: boolean
  folderMessages: type.FolderMessage[]
  hasErrors: boolean
  setMessageId: any
}

const EmailList: React.FC<EmailListProps> = ({
  dispatch,
  loading,
  folderMessages,
  hasErrors,
  setMessageId,
}) => {
  // const handleAction: React.MouseEventHandler<HTMLButtonElement> = (e) => {}

  // const [folder, setFolder] = useState<string>('Inbox')

  const handleAction = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    rec: type.Message | type.FolderMessage,
    action: string
  ): void => {
    e.stopPropagation()
    console.log(`${action}: ${rec.key} - ${rec.subject}`)
    if (action === 'Delete') {
      console.log(`
// Simple DELETE request with fetch
fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
    .then(() => this.setState({ status: 'Delete successful' }));
      `)
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'from',
      key: 'from',
      render: (text: string) => <a href="#a">{text}</a>,
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: type.Message) => (
        <ActionButtons record={record} handleAction={handleAction} />
      ),
    },
  ]

  interface DataType {
    key: React.Key
    'message-id': string
    from: string
    subject: string
  }
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.from === 'Disabled User', // Column configuration not to be checked
      name: record.from,
    }),
  }

  useEffect(() => {
    dispatch(fetchFolderMessages('Inbox'))
  }, [dispatch])

  const renderPage = () => {
    if (loading) return <PageLoader />
    if (hasErrors)
      return (
        <EmptyArea
          message="No messages in this folder."
          className="email-list-space"
        />
      )
    return (
      <Table
        columns={columns}
        dataSource={Object.values(folderMessages)}
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            console.log(
              `Email click: ${record['message-id']} - ${record.subject}`
            )
            setMessageId(record['message-id'])
          },
        })}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        className="email-list-table"
      />
    )
  }

  renderPage()

  return <>{renderPage()}</>
}

const mapStateToProps = (state: type.folderMessagesState) => {
  return {
    loading: state.folderMessages.loading,
    folderMessages: state.folderMessages.folderMessages,
    hasErrors: state.folderMessages.hasErrors,
  }
}

export default connect(mapStateToProps)(EmailList)
