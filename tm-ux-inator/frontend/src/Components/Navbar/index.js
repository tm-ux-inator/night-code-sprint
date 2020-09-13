import React from "react"

class Navbar extends React.Component{
    constructor(){
        super(props)
    }
    render(){
        return(
            <nav role="navigation">
                <div className="brand-logo">
                    <a href="#">HaalChaal</a>

                </div>
                <div className="menu">
                    <span></span>
                </div>
                <ul className="nav-list">
                    <li className="nav-item">{this.props.list[0]}</li>
                    <li className="nav-item">{this.props.list[1]}</li>
                    <li className="nav-item">{this.props.list[2]}</li>

                </ul>


            </nav>
        )
    }

}
export default Navbar