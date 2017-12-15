const https = require('https');
const api = require('./api.json')

// Prin out temp details
// Print out error message
console.log(api.key)
function get(query){
      const request =
https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`,
(response) => {

  })
}
