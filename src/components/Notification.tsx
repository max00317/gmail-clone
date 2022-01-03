import React from 'react'

function Notification() {
  return (
    <>
      <div>This mock-up was built in the span of a week using:</div>
      {/* <div>This mock-up was built over the course of 3-4 days using:</div> */}
      <ul>
        <li>React</li>
        <li>Redux for state management</li>
        <li>Ant Design as the UI Library</li>
      </ul>
      <div>
        <p>
          It was done as a proof-of-concept so only minimal features have been
          wired up.
        </p>
        <p style={{ marginTop: '10px' }}>
          Source:
          <br />
          <a
            href="https://github.com/james-priest/gmail-clone"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/james-priest/gmail-clone
          </a>
        </p>
      </div>
    </>
  )
}

export default Notification
