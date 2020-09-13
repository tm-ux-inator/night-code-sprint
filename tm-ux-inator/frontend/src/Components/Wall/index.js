import React from "react"
import "./Wall.css"
// import {Button, Container, Row, Col} from "react-bootstrap"
import Navbar from "../Navbar"

class Wall extends React.Component{
    render(){
        return(
            <div>
               <Navbar list={['First item', 'Second item', 'Third item']} /> 
               <h1>Hey</h1>
            
            </div>
           
        )
    }    
}
export default Wall