// @flow

import React, {memo} from 'react'
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

  const {setValue: setTaskValue, ...taskInput} = useFormInput('')

  function onClickAddTask() {
    props.addTask(taskInput.value, column.id)
    setTaskValue('')
  }

  return (
    // Make column draggable
    <Draggable draggableId={column.id} index={ndx}>
      {provided => (
        <ColumnContainer {...provided.draggableProps} ref={provided.innerRef}>
          <ColumnTitleContainer>
            <ColumnTitle {...provided.dragHandleProps}>{column.title}</ColumnTitle>
          </ColumnTitleContainer>
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

                {/* Add Card, if active show input component */}
                {!props.isAddCardActive ? (
                  <AddCardText className="mb-0 mt-3" onClick={props.onAddCardPressed}>
                    + Add another card
                  </AddCardText>
                ) : (
                  <AddCardContainer>
                    <AddCardInput placeholder="Enter a title for this card" {...taskInput} />
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
  padding: 6px;
  margin-right: 10px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : '#dfe3e6')};
  height: fit-content;
  border-radius: 3px;
`

const ColumnTitleContainer = styled.div`
  padding: 2px 8px;
`

const ColumnTitle = styled.h5`
  margin-bottom: 0;
`

const TaskListContainer = styled.div`
  padding: 8px;
  /* background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'lightgrey')}; */
  
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
