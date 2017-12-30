import React, {Component} from "react";
import "./Form.css"

export default class Form extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      query: "",
    }
  }

  handleInputChange= event =>{
    const {name,value} = event.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount(){
  }

  handleFormSubmit= event =>{
    console.log(event.target)
    console.log(this.state.query)
    event.preventDefault();
    if(this.state.query){ 
      this.props.sendSearch(this.state.query)
    }
  }

render(){
  return (
      <div className="col-xs-12 formCont">
        <div className="row searchWrapper">
          <div className="col-md-1 text-center icon">
            <img className="pic" src="/images/t.png" alt=":("/>
          </div>
          <div className="col-md-11">
            <form className="searchForm input-group">
              <input type="text" className="form-control" value={this.state.query} onChange={this.handleInputChange} placeholder="Seach Tweets" name="query" />
                <span className="input-group-btn">
                  <button className="btn" type="submit" onClick={this.handleFormSubmit}>
                    Submit
                  </button>
                </span>
            </form>
          </div>

        </div>
      </div>
    )
}
}

