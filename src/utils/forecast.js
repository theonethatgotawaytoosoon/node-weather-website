const request = require('request')
//28.7461843,77.1830238
const forecast = (latitude, longitude, callback )=> {

    const url = 'http://api.weatherstack.com/current?access_key=186d25b3d7fa927ed28fe1b474cc3301&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({ url, json: true }, (error, response) => {
        if (error)
            callback('Unable to connect to Weather Service!', undefined)
        else if (response.body.error)
        {
            callback('Unable to find the location', undefined)
        }
        else
            callback(undefined, 'Temperature is ' + response.body.current.temperature + ' degree Celsius and weather is mostly ' + response.body.current.weather_descriptions[0])
    })
}

module.exports = forecast
