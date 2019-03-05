// @flow

import React, {memo} from 'react'
import styled from 'styled-components'
import {Droppable, Draggable} from 'react-beautiful-dnd'

import Task from './Task'

type Props = {
  tasks: Array<{
    id: string,
    content: string,
  }>,
  column: {
    id: string,
    title: string,
    taskIds: Array<string>,
  },
  ndx: number,
}
export default memo<Props>(({tasks, column, ndx}: Props) => {
  console.log('Updated')

  return (
    // Make column draggable
    <Draggable draggableId={column.id} index={ndx}>
      {provided => (
        <ColumnContainer {...provided.draggableProps} ref={provided.innerRef}>
          <h5 {...provided.dragHandleProps}>{column.title}</h5>
          {/* Make Column a droppable container */}
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, ndx) => (
                  <Task task={task} ndx={ndx} key={task.id} />
                ))}
                {provided.placeholder}
              </TaskListContainer>
            )}
          </Droppable>
        </ColumnContainer>
      )}
    </Draggable>
  )
})

const ColumnContainer = styled.div`
  width: 250px;
  padding: 8px;
  margin-right: 10px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'lightgrey')};
`

const TaskListContainer = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'lightgrey')};
`
