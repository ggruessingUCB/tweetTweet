import React, {Component} from "react";
import helpers from "../../utils/helpers.js"
import Card from "../../components/Card"
import Form from "../../components/Form"
import Splash from "../../components/Splash"
import Footer from "../../components/Footer"
import "./Main.css"

export default class Main extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      userSearch: "Bill_Nye_Tho",
      searchResult: false
    }
    this.sendSearch = this.sendSearch.bind(this)
  }
  componentWillMount(){
      helpers.getDefault().then((response)=>{
        this.setState({searchResult:response})
      })
    }
  componentWillUpdate(nextProps, nextState) {

    if (nextState.userSearch !== this.state.userSearch) {
      console.log("UPDATED");
    }
  }

sendSearch(query) {
  this.setState({userSearch: query})
  helpers.getTweets(query).then((response) =>{
    this.setState({searchResult: response.statuses})
  })
}

render(){
  return (
      <div className="container">
      <div className="row">
      <div className="col-xs-2"/>
      <div className="col-xs-8">
      <div className="row">
        <Form sendSearch={this.sendSearch}/>
      </div>
      <div className="row mainCont">
      {this.state.searchResult ? (
        <div>
        {this.state.searchResult.map((element,index)=>(
            <Card tweet={element} delay={index} key={index} search={this.state.userSearch}/>
        ))}
        </div>
      )
      :
      (
        <Splash/>
      )}
      </div>
      <div className="row">
      <Footer/>
      </div>
      </div>
      <div className="col-xs-2"/>
      </div>
      </div>
    )
}
}