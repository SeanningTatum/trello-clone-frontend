// @flow

import React, {memo, useState} from 'react'
import {Input, Button} from 'reactstrap'
import styled from 'styled-components'
import {Droppable, Draggable} from 'react-beautiful-dnd'

import useFormInput from '../../hooks/useFormInput'

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
  onAddCardPressed: () => void,
  isAddCardActive: boolean,
  addTask: (taskContent: string, columnId: string) => void,
}
export default memo<Props>((props: Props) => {
  const {tasks, column, ndx} = props

  const {setValue: setTaskValue, ...task} = useFormInput('')

  function onClickAddTask() {
    props.addTask(task.value, column.id)
    setTaskValue('')
  }

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

                {!props.isAddCardActive ? (
                  <AddCardText className="mb-0 mt-3" onClick={props.onAddCardPressed}>
                    + Add another card
                  </AddCardText>
                ) : (
                  <AddCardContainer>
                    <AddCardInput placeholder="Enter a title for this card" {...task} />
                    <div className="text-right">
                      <Button color="success" onClick={onClickAddTask} type="button">
                        Add Task
                      </Button>
                    </div>
                  </AddCardContainer>
                )}
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
  height: fit-content;
`

const TaskListContainer = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'lightgrey')};
`

const AddCardText = styled.p`
  cursor: pointer;
  margin-bottom: 0px;
  z-index: 100;
`

const AddCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AddCardInput = styled(Input)`
  background-color: white;
  margin-bottom: 6px;
`
