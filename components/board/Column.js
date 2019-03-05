// @flow

import React from 'react'
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'

import Task from './Task'

type Props = {
  tasks: Array<{
    id: string,
    content: string,
  }>,
  column: {
    id: string,
    title: string,
    tasksIds: Array<string>,
  },
}
export default function Column({tasks, column}: Props) {
  return (
    <ColumnContainer>
      <h5>{column.title}</h5>
      <Droppable droppableId={column.id}>
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
  )
}

const ColumnContainer = styled.div`
  width: 250px;
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'lightgrey')};
`

const TaskListContainer = styled.div`
  padding: 8px;
`
