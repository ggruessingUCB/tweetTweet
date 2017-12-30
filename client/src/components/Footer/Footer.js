import React, {Component} from "react";
import "./Footer.css"


export default class Footer extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      userSearch: "billNyeTho",
    }
  }

render(){
  return (
      <div className="col-xs-12 text-center  footerCont">
      TOTALLY NOT COPYRIGHTED PLZ DON'T STEAL :(
      </div>
    )
}
}