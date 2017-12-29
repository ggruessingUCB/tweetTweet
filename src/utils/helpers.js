import axios from "axios";

export default {
  getTweets:(query) =>{
    return axios.get("TWITTERGOESHERELOL")
    .then(function(results){
      return results.data
    });
  }
}