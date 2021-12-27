import React from 'react'
import { Table, Tag, Space } from 'antd'

const EmailList: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'from',
      key: 'from',
      render: (text) => <a href="#a">{text}</a>,
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href="#b">Invite {record.name}</a>
          <a href="#c">Delete</a>
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
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  )
}

export default EmailList
