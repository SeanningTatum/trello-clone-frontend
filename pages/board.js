// @flow

import React, {useState} from 'react'
import {Container} from 'reactstrap'
import {type DropResult, DragDropContext} from 'react-beautiful-dnd'

import {type BoardItem} from '../interfaces/BoardItem'
import Navbar from '../components/dashboard/Navbar'
import NavTitleAndActions from '../components/board/NavTitleAndActions'
import Column from '../components/board/Column'

const sampleBoardData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out the garbage 1'},
    'task-2': {id: 'task-2', content: 'Imong mama'},
    'task-3': {id: 'task-3', content: 'Lmao'},
    'task-4': {id: 'task-4', content: 'Nani'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Todo',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Another todo',
      taskIds: ['task-3', 'task-4'],
    },
  },

  columnOrder: ['column-1'],
}

export default function Board() {
  const [board, setBoard] = useState(sampleBoardData)

  console.log(board)

  function onDragEnd(result: DropResult) {
    // TODO:
  }

  return (
    <div>
      <Navbar />
      <NavTitleAndActions />
      <Container fluid>
        <h5>Things</h5>
        <DragDropContext onDragEnd={onDragEnd}>
          {board.columnOrder.map(columnId => {
            const column = board.columns[columnId]
            const tasks = column.taskIds.map(taskId => board.tasks[taskId])

            return <Column tasks={tasks} column={column} key={columnId} />
          })}
        </DragDropContext>
      </Container>
    </div>
  )
}
