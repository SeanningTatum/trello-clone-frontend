// @flow

import React, {useState} from 'react'
import {Container} from 'reactstrap'
import {type DropResult} from 'react-beautiful-dnd'

import {type BoardItem} from '../interfaces/BoardItem'
import Navbar from '../components/dashboard/Navbar'
import NavTitleAndActions from '../components/board/NavTitleAndActions'
import BoardList from '../components/board/List'

const testItems: Array<BoardItem> = [
  {id: 1, content: '1'},
  {id: 2, content: '2'},
  {id: 3, content: '3'},
]

export default function Board() {
  const [items: Array<BoardItem>, setItems] = useState(testItems)

  // Utility function to reorder
  function reorder(array, startIndex, endIndex): Array<{id: number, content: string}> {
    const newArray = [...array]
    const [removed] = newArray.splice(startIndex, 1)
    newArray.splice(endIndex, 0, removed)

    return newArray
  }

  function onDragEnd(result: DropResult): void {
    // dropped outside the list
    if (!result.destination) return

    // Reorder the items
    const newItems = reorder(items, result.source.index, result.destination.index)

    setItems(newItems)
  }

  return (
    <div>
      <Navbar />
      <NavTitleAndActions />
      <Container fluid>
        <h5>Things</h5>
        <BoardList onDragEnd={onDragEnd} items={items} />
      </Container>
    </div>
  )
}
