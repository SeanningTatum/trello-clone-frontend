// @flow

import React, {memo} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'

type Props = {
  task: {
    id: string,
    content: string,
  },
  ndx: number,
}

export default memo<Props>(({task, ndx}: Props) => {
  // Prove that task does not have useless re-renders
  console.log(`[TaskID ${task.id} updated]`)

  return (
    <Draggable draggableId={task.id} index={ndx}>
      {(provided, snapshot) => (
        <TaskItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskItem>
      )}
    </Draggable>
  )
})

const TaskItem = styled.div`
  userselect: 'none';
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  border-radius: 3px;
`
