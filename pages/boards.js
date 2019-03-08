// @flow
import React, {useState} from 'react'
import styled from 'styled-components'
import {Container, Row, Col, Modal} from 'reactstrap'

import Navbar from '../components/dashboard/Navbar'
import Sidenav from '../components/dashboard/Sidenav'
import BoardList from '../components/dashboard/BoardList'
import CreateBoardForm from '../components/board/CreateBoardForm'

const createBoard = (boardName: string, color: string = 'rgb(0, 121, 191)') => ({
  name: boardName,
  color,

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
})

// Mock board data
const mockBoards = [createBoard('board 1'), createBoard('board 2'), createBoard('board 3')]

export default function Boards() {
  const [isModalOpen: boolean, setIsModalOpen] = useState(false)
  const [boards, setBoards] = useState(mockBoards)

  function onCreateNewBoardClicked() {
    setIsModalOpen(true)
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  function onCreateBoard(boardName: string, color: string) {
    const newBoard = createBoard(boardName, color)
    setBoards([...boards, newBoard])
    setIsModalOpen(false)
  }

  return (
    <div>
      <Navbar />
      <Container className="pt-5">
        <Row>
          <Col md={3}>
            <Sidenav />
          </Col>
          <Col md={9}>
            <h5>Personal Boards</h5>
            <Row className="justify-space-between">
              <BoardList boards={boards} />
              <Col md={3}>
                <CreateBoardBox className="py-3" onClick={onCreateNewBoardClicked}>
                  <p className="mb-0">Create new board...</p>
                </CreateBoardBox>
              </Col>
            </Row>
          </Col>
        </Row>

        <StyledModal
          isOpen={isModalOpen}
          toggle={toggleModal}
          fade={false}
          contentClassName="modalContent"
          backdropClassName="backdrop"
        >
          <CreateBoardForm onCreateBoardClicked={onCreateBoard} />
        </StyledModal>
      </Container>

      {/* Use global because modal is defined outside of the component */}
      <style jsx global>{`
        .modalContent {
          background-color: transparent;
          width: fit-content;
          margin: 0 auto;
          border: none;
        }

        .modal-backdrop {
          opacity: 0.75 !important;
        }
      `}</style>
    </div>
  )
}

const CreateBoardBox = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  colors: #6b808c;
  background-color: rgba(9, 45, 66, 0.08);
  cursor: pointer;
`

const StyledModal = styled(Modal)`
  margin-top: 3.5rem;
  background-color: transparent;
  color: white;
`
