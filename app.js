// https://www.wunderground.com/

let weather = require('./weather.js')
let query = process.argv.slice(2).join("_").replace(' ','_')

console.log(query)
weather.getWeather(query)
