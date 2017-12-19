const http = require('http');
let api = require("./api.json")


function printWeather(weather) {
  console.log(weather)
}


function getWeather(query) {
let request = http.get(`http://api.wunderground.com/api/${api.key}/conditions/q/CA/${query}.json`,
  (resp) => {
    console.log('Status Code:', resp.statusCode)
    let body = ''
    resp.on('data', (dataChunk) => {
      body += dataChunk;
    })

    resp.on('end', () => {
      let option = {}
      let weather = JSON.parse(body)
      option.fullLocation = weather.current_observation.display_location.full
      option.weather = weather.current_observation.weather
      option.tempF = weather.current_observation.temp_f
      option.tempC = weather.current_observation.temp_c
      printWeather(option)
    })
  })
}

module.exports.getWeather = getWeather;
