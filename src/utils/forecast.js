const request = require('request')

const forecast = (latitude, longitude , callback) => {
    const url = "http://api.weatherstack.com/current?access_key=29ddd6498a9d1c6338b0c03b182a985a&query=" + latitude + ","+ longitude
    request({url:url, json:true}, (error,{body})=>{
        if( error ){
            callback('unable to connect to weather service', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, 'It is currently ' + body.current.temperature + " degrees out. There is " + body.current.precip + "% chance of rain, \nhaving humdity " + body.current.humidity + "\nLocation: " + body.location.name )
        }
    })
}

module.exports = forecast