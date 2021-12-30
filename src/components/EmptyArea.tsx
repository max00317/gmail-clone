import React from 'react'
import styled from 'styled-components'

const Section = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`
const Message = styled('span')`
  font-weight: 500;
`

const EmptyArea = ({
  message,
  className,
}: {
  message: string
  className: string
}) => {
  return (
    <Section className={className}>
      <Message>{message}</Message>
    </Section>
  )
}

export default EmptyArea
