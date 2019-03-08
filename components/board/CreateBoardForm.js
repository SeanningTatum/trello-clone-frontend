import React, {useState} from 'react'
import styled from 'styled-components'
import {Row, Col, Button, Input} from 'reactstrap'

import useFormInput from '../../hooks/useFormInput'

const COLORS = [
  'rgb(0, 121, 191)',
  'rgb(210, 144, 52)',
  'rgb(81, 152, 57)',
  'rgb(176, 70, 50)',
  'rgb(137, 96, 158)',
  'rgb(205, 90, 145)',
  'rgb(75, 191, 107)',
  'rgb(0, 174, 204)',
  'rgb(131, 140, 145)',
]

export default function CreateBoardForm() {
  const [currentBg, setCurrentBg] = useState(COLORS[0])
  const {setValue: setBoardName, ...boardName} = useFormInput('')

  function changeCurrentBg(newColor) {
    setCurrentBg(newColor)
  }

  return (
    <FormContainer>
      <Row className="mb-1" noGutters>
        <Col md={7} className="mr-3">
          <CreateBoardTile style={{backgroundColor: currentBg}}>
            <CreateFormInput placeholder="Add board title" {...boardName} />
          </CreateBoardTile>
        </Col>
        <Col md={3}>
          <Row noGutters>
            {COLORS.map((color, ndx) => (
              <Col xs={4}>
                <Tile style={{backgroundColor: color}} onClick={() => changeCurrentBg(color)}>
                  {ndx + 1}
                </Tile>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Button
        color="success"
        type="button"
        style={{
          backgroundColor: boardName.value === '' && 'rgba(9, 45, 66, 1)',
          borderColor: boardName.value === '' && 'rgba(9, 45, 66, 1)',
        }}
        disabled={boardName.value === ''}
      >
        <span>Create Board</span>
      </Button>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  margin: 0 auto;
  width: fit-content;
`

const CreateFormInput = styled(Input)`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: white;

  &::placeholder {
    color: white !important;
  }

  &:focus {
    background-color: rgba(255, 255, 255);
    opacity: 0.5;
    color: black;
  }
`

const CreateBoardTile = styled.div`
  height: 96px;
  padding: 10px 10px 10px 16px;
  background-color: ${props => props.theme.primary};
  border-radius: 3px;
`

const Tile = styled.div`
  height: 28px;
  width: 28px;
  margin-bottom: 6px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 3px;
  background-color: ${props => props.theme.primary};
  cursor: pointer;
`
