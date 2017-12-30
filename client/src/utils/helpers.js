import axios from "axios";

export default {
  getTweets: (query)=>{
    return axios.get("/api/tweets/"+query).then(function(response){
      return response.data
    })
  },
  getDefault: () =>{
    return axios.get("/api/tweets").then(function(response){
      return response.data
    })
  }
}