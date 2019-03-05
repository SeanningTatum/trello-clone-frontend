// @flow

import React, {memo} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'

import {type BoardItem} from '../../interfaces/BoardItem'

type Props = {
  item: BoardItem,
  ndx: number,
}

// Use memo to prevent unwanted items from updating
export default memo(({item, ndx}: Props) => {
  // Prove that there are no unwanted re-renders
  console.log(`[item ${item.id}] updated`)

  return (
    <Draggable key={item.id} draggableId={item.id} index={ndx}>
      {(provided, snapshot) => (
        <StyledListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{...provided.draggableProps.style}}
        >
          {item.content}
        </StyledListItem>
      )}
    </Draggable>
  )
})

const StyledListItem = styled.div`
  userselect: 'none';
  padding: 16px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'grey')};
`
