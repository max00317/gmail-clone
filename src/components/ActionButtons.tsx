import React from 'react'
import { Button, Tooltip, Space } from 'antd'
import {
  ContainerFilled,
  DeleteFilled,
  MailFilled,
  ClockCircleFilled,
} from '@ant-design/icons'

import type * as type from '../types/GMail'

const ActionButtons = ({
  record,
}: {
  record: type.FolderMessage
}): React.ReactElement => {
  const handleAction = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    rec: type.FolderMessage,
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

  return (
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
  )
}

export default ActionButtons
