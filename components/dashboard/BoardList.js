// @flow

import React from 'react'
import styled from 'styled-components'
import {Col} from 'reactstrap'
import Link from 'next/link'

export default function BoardList({boards}) {
  return boards.map(num => (
    <Col md={3} className="mb-3" key={num}>
      <Link href="/board">
        <Box className="px-2">
          <BoxContainer>
            <p className="mb-0">Box {num}</p>
          </BoxContainer>
        </Box>
      </Link>
    </Col>
  ))
}

const Box = styled.div`
  border-radius: 3px;
  background-color: ${props => props.theme.primary};
  color: white;
  cursor: pointer;
`

const BoxContainer = styled.div`
  height: 80px;
  padding-top: 6px;
`
