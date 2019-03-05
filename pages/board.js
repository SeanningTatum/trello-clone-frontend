// @flow

import React, {useState} from 'react'
import {Container} from 'reactstrap'
import styled from 'styled-components'
import {type DropResult, DragDropContext, Droppable} from 'react-beautiful-dnd'

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

  columnOrder: ['column-1', 'column-2'],
}

export default function Board() {
  const [board, setBoard] = useState(sampleBoardData)

  function reorder(array, startIndex, endIndex) {
    const result = Array.from(array)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  /**
   * Moves one task card to another list
   */
  function move(source, destination, droppableSource, droppableDestination) {
    const sourceClone = Array.from(source)
    const destClone = Array.from(destination)

    // Remove item
    const [removed] = sourceClone.splice(droppableSource.index, 1)

    // Add the removed item to the destination
    destClone.splice(droppableDestination.index, 0, removed)

    // Return the updated columns
    const newColumns = {...board.columns}
    newColumns[droppableSource.droppableId].taskIds = sourceClone
    newColumns[droppableDestination.droppableId].taskIds = destClone

    return newColumns
  }

  function onDragEnd(result: DropResult) {
    const {destination, source} = result

    // dropped outside the list
    if (!destination) {
      return
    }

    // If user put dropped the task on the same list
    if (destination.droppableId === source.droppableId) {
      const newTaskIds = reorder(
        board.columns[destination.droppableId].taskIds,
        source.index,
        destination.index
      )

      const newBoard = {...board}

      // Update board with new column
      newBoard.columns[source.droppableId] = {
        ...newBoard.columns[source.droppableId],
        taskIds: newTaskIds,
      }

      setBoard(newBoard)
    } else {
      // User dropped task on another list

      // Get new columns from moving the list to another
      const newColumns = move(
        board.columns[source.droppableId].taskIds,
        board.columns[destination.droppableId].taskIds,
        source,
        destination
      )

      // Update board
      const newBoard = {...board}
      newBoard.columns = newColumns

      setBoard(newBoard)
    }
  }

  return (
    <div>
      <Navbar />
      <NavTitleAndActions />
      <Container fluid>
        <h5>Things</h5>
        <DragDropContext onDragEnd={onDragEnd}>
          <ColumnContainer>
            {board.columnOrder.map(columnId => {
              const column = board.columns[columnId]
              const tasks = column.taskIds.map(taskId => board.tasks[taskId])

              return <Column tasks={tasks} column={column} key={columnId} />
            })}
          </ColumnContainer>
        </DragDropContext>
      </Container>
    </div>
  )
}

const ColumnContainer = styled.div`
  display: flex;
`
