// @flow

import React from 'react'
import {Col} from 'reactstrap'
import Link from 'next/link'

export default function BoardList({boards}) {
  return boards.map(num => (
    <Col md={3} className="text-center mb-3" key={num}>
      <Link href="/board">
        <div className="border">
          <p className="mb-0">Box {num}</p>
        </div>
      </Link>
    </Col>
  ))
}
