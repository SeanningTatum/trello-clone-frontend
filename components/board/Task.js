import React, {memo} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'

export default memo(({task, ndx}) => {
  console.log(`[TaskID ${task.id} updated]`)

  return (
    <Draggable draggableId={task.id} index={ndx}>
      {provided => (
        <TaskItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
          ref={provided.innerRef}
        >
          {task.content}
        </TaskItem>
      )}
    </Draggable>
  )
})

const TaskItem = styled.div`
  userselect: 'none';
  padding: 16px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'grey')};
`
