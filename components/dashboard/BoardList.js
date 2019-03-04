import React from 'react'
import {Col} from 'reactstrap'

export default function BoardList({boards}) {
  return boards.map(num => (
    <Col md={3} className="text-center mb-3" key={num}>
      <div className="border">
        <p className="mb-0">Box {num}</p>
      </div>
    </Col>
  ))
}
