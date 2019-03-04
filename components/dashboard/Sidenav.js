import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

export default function Sidenav() {
  return (
    <ListGroup>
      <ListGroupItem>Boards</ListGroupItem>
      <ListGroupItem>Home</ListGroupItem>
      <h5 className="my-3">Team</h5>
      <ListGroupItem>+ Create Team</ListGroupItem>
    </ListGroup>
  )
}
