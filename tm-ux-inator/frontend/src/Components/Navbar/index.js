import React from "react"
import "./Navbar.css"

class Navbar extends React.Component{
 
    render(){
        return(
            <navbar class="active">
                <h1>
                    HaalChaal
                </h1>
                <ul>
                    <li>Home</li>
                   <li>About</li> 
                    <li>Contact</li>
                </ul>
            </navbar> 
        )
    }

}
export default Navbar