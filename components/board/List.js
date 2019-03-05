// @flow

import React from 'react'
import {DragDropContext, Droppable, type DropResult} from 'react-beautiful-dnd'
import styled from 'styled-components'

import {type BoardItem} from '../../interfaces/BoardItem'

import ListItem from './ListItem'

type Props = {
  items: Array<BoardItem>,
  onDragEnd: (result: DropResult) => void,
}

export default function List({items, onDragEnd}: Props) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <ListContainer ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
            {items.map((item, ndx) => (
              <ListItem item={item} ndx={ndx} key={item.id} />
            ))}
            {provided.placeholder}
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  )
}

const ListContainer = styled.div`
  width: 250px;
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'lightgrey')};
`
