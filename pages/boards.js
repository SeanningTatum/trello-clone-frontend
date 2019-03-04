import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import Navbar from '../components/dashboard/Navbar'
import Sidenav from '../components/dashboard/Sidenav'
import BoardList from '../components/dashboard/BoardList'

export default function Boards() {
  return (
    <div>
      <Navbar />
      <Container className="pt-5">
        <Row>
          <Col md={3}>
            <Sidenav />
          </Col>
          <Col md={9}>
            <h5>Personal Boards</h5>
            <Row className="justify-space-between">
              <BoardList boards={[1, 2, 3, 4, 5]} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
