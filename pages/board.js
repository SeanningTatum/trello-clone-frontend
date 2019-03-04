import React from 'react'
import {Container} from 'reactstrap'

import Navbar from '../components/dashboard/Navbar'
import NavTitleAndActions from '../components/board/NavTitleAndActions'

export default function Board() {
  return (
    <div>
      <Navbar />
      <NavTitleAndActions />
      <Container fluid>
        <h5>Things</h5>
      </Container>
    </div>
  )
}
