import React,{Component} from 'react'
import {Link} from 'react-router'

export default class Menu extends Component {

  render() {
    var a = [
      'Bangkok ',
      'Phuket ',
      'Chiangmai ',
      'Pattaya '
    ]


    while (true) {
      return(

        <h1><Link to="/provdetail">{a}</Link></h1>
      )
    }
  }
}
