import React from 'react'

function Notification() {
  return (
    <>
      <div>This mock-up was built over 3-4 days of work. It uses:</div>
      <ul>
        <li>React</li>
        <li>Redux for state management</li>
        <li>Ant Design as the UI Library</li>
      </ul>
      <div>
        It was done as a Proof of Concept so many of the UI features are not
        wired up.
        <br />
        Source code:{' '}
        <a
          href="https://github.com/james-priest/gmail-clone"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/james-priest/gmail-clone
        </a>
      </div>
    </>
  )
}

export default Notification
