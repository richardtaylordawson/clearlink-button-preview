import React, { Fragment, useState } from "react"
import styled from "@emotion/styled"
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import { Input } from "./components/input"

export const App = () => {
  const [buttonValues, setButtonValues] = useState({
    "backgroundColor": "#0097f9",
    "selectedBackgroundColor": "#999999",
    "textColor": "#ffffff",
    "borderColor": "#666666",
    "borderWidth": "1",
    "borderRadius": "5",
    "paddingTopBottom": "5",
    "paddingLeftRight": "20",
    "fontSize": "16",
    "lineHeight": "28"
  })

  const handleInputChange = (event) => {
    event.persist()
    setButtonValues(buttonValues => ({...buttonValues, [event.target.name]: event.target.value}))
  }

  const snippet = `
    <style>
      input[type="radio"] { display: none !important; }

      input + label {
        background-color: ${buttonValues.backgroundColor} !important;
        color: ${buttonValues.textColor} !important;
        border: ${buttonValues.borderWidth}px solid ${buttonValues.borderColor} !important;
        border-radius: ${buttonValues.borderRadius}px !important;
        padding: ${buttonValues.paddingTopBottom}px ${buttonValues.paddingLeftRight}px !important;
        font-size: ${buttonValues.fontSize}px !important;
        line-height: ${buttonValues.lineHeight}px !important;
        width: 100% !important;
        cursor: pointer !important;
        position: relative !important;
        display: block !important;
        margin-left: 0 !important;
      }

      input[type=radio]:checked + label { background-color: ${buttonValues.selectedBackgroundColor} !important; }
      input + label::before { content: none !important; }
    </style>
  `

  /**
  * Copies a value to the user's clipboard
  * @param {string} value - The value to copy to the clipboard
  * @param {object} event - The event object that fires the copy event
  * @param {string} eventAfterText - The text that will be changed once the event is complete
  */
  const copyToClipboard = (event) => {
    const tempElement = document.createElement('textarea')
    tempElement.value = snippet
    tempElement.setAttribute('readonly', '')
    tempElement.style.position = 'absolute'
    tempElement.style.left = '-9999px'
    document.body.appendChild(tempElement)
    tempElement.select()
    document.execCommand('copy')
    document.body.removeChild(tempElement)
    document.execCommand('copy')

    event.currentTarget.innerText = 'Snippet copied!'

    setTimeout(element => {
      element.innerText = "Create snippet"
    }, 1000, event.currentTarget)
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3}} xs={12}>
            <Card className="mt-3">
              <Card.Body>
              <Card.Title>Instapage Button Creator</Card.Title>
                <div className="mb-3">
                  <label>Preview:</label>
                  <Card>
                    <Card.Body>
                      <PreviewButton buttonValues={buttonValues}>Button 1</PreviewButton>
                      <PreviewButton buttonValues={buttonValues}>Button 2</PreviewButton>
                      <PreviewButton className="mb-0" buttonValues={buttonValues}>Button 3</PreviewButton>
                    </Card.Body>
                  </Card>
                </div>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Input
                        label="Background Color"
                        name="backgroundColor"
                        type="color"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Input
                        label="Selected Background Color"
                        name="selectedBackgroundColor"
                        type="color"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Input
                        label="Text Color"
                        name="textColor"
                        type="color"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Input
                        label="Border Color"
                        name="borderColor"
                        type="color"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Input
                        label="Border Width"
                        name="borderWidth"
                        type="number"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Input
                        label="Border Radius"
                        name="borderRadius"
                        type="number"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Input
                        label="Padding Top/Bottom"
                        name="paddingTopBottom"
                        type="number"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Input
                        label="Padding Left/Right"
                        name="paddingLeftRight"
                        type="number"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Input
                        label="Font Size"
                        name="fontSize"
                        type="number"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Input
                        label="Line Height"
                        name="lineHeight"
                        type="number"
                        buttonValues={buttonValues}
                        handleInputChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                </Form>
                <Button variant="success" block onClick={copyToClipboard}>Create snippet</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

const PreviewButton = styled.label`
  background-color: ${props => props.buttonValues.backgroundColor};
  color: ${props => props.buttonValues.textColor};
  border: ${props => props.buttonValues.borderWidth}px solid ${props => props.buttonValues.borderColor};
  border-radius: ${props => props.buttonValues.borderRadius}px;
  padding: ${props => props.buttonValues.paddingTopBottom}px ${props => props.buttonValues.paddingLeftRight}px;
  font-size: ${props => props.buttonValues.fontSize}px;
  line-height: ${props => props.buttonValues.lineHeight}px;
  width: 100%;
  cursor: pointer;
  position: relative;
  display: block;
  margin-left: 0;
`
