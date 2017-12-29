import axios from "axios";

export default {
  getTweets:(query) =>{
    return axios.get("https://api.twitter.com/1.1/search/tweets.json")
    .then(function(results){
      return results.data
    });
  }
}