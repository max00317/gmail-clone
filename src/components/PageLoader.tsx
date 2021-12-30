import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

const Section = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: #fff;
`
const Title = styled('h1')`
  margin: 2em 0 0;
`
const Subhead = styled('div')`
  margin: 0 0 2em;
`

const Credit = styled('h3')`
  margin: 2.5em 0;
`

const PageLoader = () => {
  return (
    <Section>
      <Title>GMail Clone</Title>
      <Subhead>
        In <em>slightly</em> more than 3 hours...
      </Subhead>
      <ReactLoading type="spin" color="#1890FF" width="6%" />
      <Credit>by James Priest</Credit>
    </Section>
  )
}

export default PageLoader
