/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/

import React, {Component} from "react";
import "./Card.css"

export default class Card extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      tweet: false,
      text: "",
      highlight:""
    }
  }

  componentWillMount(){
   this.setState({highlight:this.props.tweet.text})

  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props){

    this.setState({text: nextProps.tweet.text})

    var string = nextProps.tweet.text

    var replace = nextProps.search

    var up = '<b>'+nextProps.search.toUpperCase()+'</b>';

    String.prototype.replaceAll = function (replaceThis, withThis) {
        var re = new RegExp(replaceThis,"gi"); 
        return this.replace(re, withThis);
      };
    var done = string.replaceAll(replace, up);

    this.setState({highlight: done})

  }
  }

render(){
  return (
    <div className={"row cardCont fade delay"+this.props.delay}>

      <div className="col-xs-2 col-sm-2">
        <img className="img-responsive imgCont" src={this.props.tweet.user.profile_image_url_https} alt=":("/>
      

      </div>

      <div className="col-xs-8 col-sm-8 textCont">
        <div className="row">
          <div className="col-sm-4">
            <strong>{this.props.tweet.user.name}</strong>
          </div>
          <div className="col-sm-4">
            <strong>@{this.props.tweet.user.screen_name}</strong>
          </div>
          <div className="col-sm-4">
            <strong>+{this.props.tweet.retweet_count}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
          <div dangerouslySetInnerHTML={{__html: this.state.highlight}} ></div>
          </div>
        </div>
      </div>
    </div>
    )
}
}