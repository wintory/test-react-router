import React,{Component} from 'react'
import logo from '../logo.svg'
import '../css/nav.css'
import {Link} from 'react-router'

class Nav extends Component{
  render(){
    return(
    <nav>
      <div className="navbar">
        <img alt={logo}></img>
      </div>
      <div className="login"> <Link to="/login">Login</Link></div>
    </nav>
    )
  }
}

export default Nav
