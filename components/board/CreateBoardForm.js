import React from 'react'
import styled from 'styled-components'
import {Row, Col, Button} from 'reactstrap'

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
  return (
    <FormContainer>
      <Row className="mb-1">
        <Col md={8}>
          <CreateBoardTile>
            <p>Add board title</p>
          </CreateBoardTile>
        </Col>
        <Col md={4}>
          <Row noGutters>
            {COLORS.map((color, ndx) => (
              <Col xs={4}>
                <Tile style={{backgroundColor: color}}>{ndx + 1}</Tile>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Button color="success">
        <span>Create Board</span>
      </Button>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  margin: 0 auto;
  width: fit-content;
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
