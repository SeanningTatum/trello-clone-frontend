import React, {useState} from 'react'
import styled from 'styled-components'
import {Container, Row, Col, Modal} from 'reactstrap'

import Navbar from '../components/dashboard/Navbar'
import Sidenav from '../components/dashboard/Sidenav'
import BoardList from '../components/dashboard/BoardList'

export default function Boards() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function onCreateNewBoardClicked() {
    setIsModalOpen(true)
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
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
              <BoardList boards={[1, 2, 3, 4, 5]} />
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
        >
          <h5>Hello</h5>
        </StyledModal>
      </Container>

      {/* Use global because modal is defined outside of the component */}
      <style jsx global>{`
        .modalContent {
          background-color: transparent;
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
`
