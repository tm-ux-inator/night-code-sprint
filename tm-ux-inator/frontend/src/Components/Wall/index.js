import React from "react"
import "./Wall.css"
import {Button, Container, Row, Col} from "react-bootstrap"
import Navbar from "../Navbar"

class Wall extends React.Component{
    render(){
        return(
            <div>
               <Navbar list={['First item', 'Second item', 'Third item']} /> 
            <Container fluid>
                <Row>
                    <Col> First message </Col>
                    <Col> Second message </Col>
                    <Col> Third message</Col>

                </Row>
                <Row>
                    <Button variant="success">Success</Button>
                </Row>
            </Container>
            
            </div>
           
        )
    }    
}
export default Wall