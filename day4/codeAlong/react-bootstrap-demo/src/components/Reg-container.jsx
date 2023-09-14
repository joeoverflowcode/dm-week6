import React from "react";
import Container  from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import './container.css'

const RegContainer = () => {
    return(
    <Container className = "container">

        <Row>
            <Col className="col" xs='12' md="4" lg="6"> 1 of 2</Col>
            <Col className="col" xs='12' md="4"> 2 of 2</Col>
            <Col className="col" xs='12' md="4"> 3 of 3</Col>
        </Row>
        <Row>
            <Col className="col" xs='6'> 1 of 1</Col>
            <Col className="col" xs='6'> 🚀 </Col>
        </Row>

    </Container>
    )
}


export default RegContainer