// @flow

import React, {useState} from 'react'
import {Container} from 'reactstrap'
import {type DropResult} from 'react-beautiful-dnd'
import styled from 'styled-components'

import {type BoardItem} from '../interfaces/BoardItem'
import Navbar from '../components/dashboard/Navbar'
import NavTitleAndActions from '../components/board/NavTitleAndActions'

const sampleBoardData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out the garbage'},
    'task-2': {id: 'task-2', content: 'Take out the garbage'},
    'task-3': {id: 'task-3', content: 'Take out the garbage'},
    'task-4': {id: 'task-4', content: 'Take out the garbage'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Todo',
      tasksIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Another todo',
      tasksIds: ['task-3', 'task-4'],
    },
  },

  columnOrder: ['column-1'],
}

export default function Board() {
  const [board, setBoard] = useState(sampleBoardData)

  return (
    <div>
      <Navbar />
      <NavTitleAndActions />
      <Container fluid>
        <h5>Things</h5>
        <BoardList />
      </Container>
    </div>
  )
}

const ColumnContainer = styled.div`
  width: 250px;
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'lightgrey')};
`

const StyledListItem = styled.div`
  userselect: 'none';
  padding: 16px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'grey')};
`
