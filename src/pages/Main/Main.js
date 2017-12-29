import React, {Component} from "react";
import helpers from "../../utils/helpers.js"
import Card from "../../components/Card"
import Form from "../../components/Form"
import Splash from "../../components/Splash"

export default class Main extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      userSearch: "billNyeTho",
      searchResult: {}
    }
  }



sendSearch(query) {
  helpers.getTweets(this.state.userSearch)
  .then(function(response){
    this.setState({searchResult: response})
  })

}

render(){
  return (
      <div>
      <Form sendSearch={this.sendSearch}/>
      {this.state.searchResult ?
        <Card results={this.state.searchResult}/>
      :
        <Splash/>
      }
      <Footer/>
      </div>
    )
}
}