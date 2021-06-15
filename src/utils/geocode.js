const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXNodWt1bWFydG9zaCIsImEiOiJja296dzZhZWkwYWdzMnZtd295cmJkZjU4In0.II1N3kOeGiiiitwP_is8wg&limit=1'

    request({ url, json: true }, (error, response) => {
        if (error)
            callback('Unable to connect to map service!', undefined)
        else if (response.body.message === 'Not Found' || response.body.features.length === 0)
            callback(undefined, 'The location is invalid. Try another search.')
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode