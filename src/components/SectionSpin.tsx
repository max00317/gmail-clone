import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const CenterWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: #fff;
`

function SectionSpin({ className }: { className: string }) {
  return (
    <CenterWrapper className={className}>
      <Spin />
    </CenterWrapper>
  )
}

export default SectionSpin
