const Twitter = require("twitter");
const keys = require("../secrets/twitterkeys.js")

const client = new Twitter({
  consumer_key: keys.consumerKey,
  consumer_secret: keys.consumerSecret,
  access_token_key: keys.token,
  access_token_secret: keys.secret
});

module.exports = {
  findBill: function(req,res){
    var params = {screen_name: "Bill_Nye_Tho" , count: 10};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets)
      }
      else{
        console.log(error);
      }
    });
  },
  findQuery: function(req,res){
    var params = {q: req.params.id, count: 10, result_type: "mixed"};
    client.get('search/tweets', params, function(error, tweets, response) {
      if(!error){
        res.json(tweets)
      }
      else{
        console.log(error)
      }
    })
  }
}