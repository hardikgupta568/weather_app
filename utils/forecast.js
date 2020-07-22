var request=require('request');


// //==========KEYforOPEN==========
// //3d6f28da7df090902544b64ae8514253
// //api.openweathermap.org/data/2.5/weather?q={city name}&appid=3d6f28da7df090902544b64ae8514253

function forecast(lat,long,callback)
{
    var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=3d6f28da7df090902544b64ae8514253&units=metric';
    request({url,json:true},function(err,{body})
    {
        if(err)
        {
            callback('Unable to connect to weather service',undefined);
        }
        else if(body.cod==="400")
        {
            callback('unable to find location',undefined);
        }
        else
        {
            callback(undefined,"It is currently "+body.main.temp+" degrees.There is "+body.main.humidity+"% humidity");
        }
    })

}
module.exports=forecast;