import React, {Component}from "react";

export default class Splash extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      userSearch: "billNyeTho",
    }
  }

  componentWillMount(){
    console.log(".")
  }

  render(){
    return (
        <div className="col-sm-12 text-center">
        dont look im naked
        </div>
      )
  }
}
