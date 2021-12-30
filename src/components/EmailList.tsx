import React from 'react'
import { Table, Button, Tooltip, Space } from 'antd'
import {
  ContainerFilled,
  DeleteFilled,
  MailFilled,
  ClockCircleFilled,
} from '@ant-design/icons'

import type * as type from '../types/Message'

const EmailList: React.FC<any> = ({ setMessageId }) => {
  // const handleAction: React.MouseEventHandler<HTMLButtonElement> = (e) => {}
  const handleAction = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    rec: type.Message | type.FolderMessage,
    action: string
  ): void => {
    // console.log(`rec`, rec)
    e.stopPropagation()
    console.log(`${action}: ${rec.key} - ${rec.subject}`)
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
        <Space size={0} className="actions">
          <Tooltip title="Archive">
            <Button
              type="text"
              shape="circle"
              icon={<ContainerFilled />}
              onClick={(e) => handleAction(e, record, 'Archive')}
            />
          </Tooltip>

          <Tooltip title="Delete">
            <Button
              type="text"
              shape="circle"
              icon={<DeleteFilled />}
              onClick={(e) => handleAction(e, record, 'Delete')}
            />
          </Tooltip>

          <Tooltip title="Mark as unread">
            <Button
              type="text"
              shape="circle"
              icon={<MailFilled />}
              onClick={(e) => handleAction(e, record, 'Mark as unread')}
            />
          </Tooltip>

          <Tooltip title="Snooze">
            <Button
              type="text"
              shape="circle"
              icon={<ClockCircleFilled />}
              onClick={(e) => handleAction(e, record, 'Snooze')}
            />
          </Tooltip>
        </Space>
      ),
    },
  ]

  const data = [
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park',
    //   tags: ['nice', 'developer'],
    // },
    {
      key: '123abc',
      'message-id': '123abc',
      from: 'Jane Doe',
      subject: 'Re: Postgres Meetup Thursday',
    },
    {
      key: '456def',
      'message-id': '456def',
      from: 'Richard Roe',
      subject: 'Lunch Next Week',
    },
    {
      key: '789aaa',
      'message-id': '789aaa',
      from: 'Alan Turing',
      subject: 'Emacs Release Update',
    },
    {
      key: '098ddd',
      'message-id': '098ddd',
      from: 'Grace Hopper',
      subject: 'New Compiler Version Available',
    },
  ]

  interface DataType {
    key: React.Key
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

  return (
    <Table
      columns={columns}
      dataSource={data}
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
    />
  )
}

export default EmailList
