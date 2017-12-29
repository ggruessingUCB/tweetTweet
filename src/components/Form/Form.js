import React, {Component} from "react";

export default class Form extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      userSearch: "billNyeTho",
    }
  }

render(){
  return (
      <div className="col-md-12">
        <div className="row searchWrapper">
          <div className="col-md-6">
        SearchySearch
          </div>
          <div className="cold-md-6">
            <form className="searchForm">
              <input onClick={this.props.sendSearch} placeholder="Seach Tweets" name="query" />
            </form>
          </div>
        </div>
      </div>
    )
}
}
