import React from 'react'
import { Button, Modal, message } from 'antd'

interface ModalProps {
  isModalVisible: boolean
  handleOk: () => void
  handleCancel: () => void
  loading: boolean
}

function ComposeModal({
  isModalVisible,
  handleOk,
  handleCancel,
  loading,
}: ModalProps) {
  return (
    <Modal
      title="New Message"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={500}
      mask={false}
      maskClosable={false}
      wrapClassName="compose-wrapper"
      className="compose-modal"
      transitionName=""
      maskTransitionName=""
      getContainer={false}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={() => {
            /* cSpell:disable */
            console.log(`
// Simple POST request with a JSON body using fetch
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      to: 'james-priest@outlook.com',
      from: 'marcus.aureloius@rome.gov',
      subject: 'Lorem Ipsum...',
      body: 'Brutus,
      
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Excepturi nobis repellendus et omnis sit dolorum, numquam
        error itaque praesentium magnam laborum, officiis,
        asperiores tempore?

        - Marcus Aurelius'
    })
};
fetch('https://reqres.in/api/posts', requestOptions)
    .then(response => response.json())
    .then(data => setResponse({ postId: data.id }));
            `)
            setTimeout(() => {
              handleOk()
              message.success({
                content: 'Message Sent!',
                duration: 3,
                key: 'sent',
                style: {
                  bottom: '250px',
                  right: '250px',
                  position: 'fixed',
                },
              })
            }, 300)
          }}
        >
          Send
        </Button>,
      ]}
    >
      <div>
        <table className="compose-table">
          <tbody>
            <tr>
              <td>
                To:{' '}
                <span className="email-address">
                  James Priest (james-priest@outlook.com)
                </span>
              </td>
            </tr>
            <tr>
              <td>
                Subject: <span>Lorem Ipsum...</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Brutus,</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi nobis repellendus et omnis sit dolorum, numquam
                  error itaque praesentium magnam laborum, officiis, asperiores
                  tempore?
                </p>
                <p>- Marcus Aurelius</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default ComposeModal
