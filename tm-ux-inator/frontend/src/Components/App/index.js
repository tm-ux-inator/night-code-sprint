import React from "react"
import "./App.css"
import {Navbar, Container, Col, Row, Button} from "react-bootstrap"
// import Wall from"../all"



class App extends React.Component{
  render(){
    return(
      <div>
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
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


export default App