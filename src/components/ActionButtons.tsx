import React from 'react'
import { Button, Tooltip, Space } from 'antd'
import {
  ContainerFilled,
  DeleteFilled,
  MailFilled,
  ClockCircleFilled,
} from '@ant-design/icons'

import type * as type from '../types/Message'

interface HandleAction {
  (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    rec: type.Message | type.FolderMessage,
    action: string
  ): void
}

const ActionButtons = ({
  record,
  handleAction,
}: {
  record: type.Message
  handleAction: HandleAction
}): React.ReactElement => {
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
