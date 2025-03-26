// import React, { useState } from 'react'
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import setSingleMon from './CardDisplay.jsx'

export default function Title({setSingleMon, setFlash}) {

    const [formInput,setFormInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormInput("")
        console.log(`testing button input ${formInput}`)
        setSingleMon(`${formInput}`)
        setFlash(true)
        setTimeout(() =>{
          setFlash(false)
        },500)
        
    }

  return (
    <Container fluid="lg" className={"border-2 border-amber-200"}>
      <Row>
        <Col>
          <div
            className={
              "bg-orange-700 hover:bg-red-700 text-2xl text-yellow-500 text-center text-4xl border-4 underline "
            }
          >
            Yet another Pokemon App
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formLookupPokemon">
        <Form.Label className={"text-black-600 text-3xl"}>Find a Pokemon</Form.Label>
        <Form.Control
        type="text"
        className={"border-amber-600 border-2"}
        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
        />
        <Form.Text>
            
        </Form.Text>
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
    
  );
}
