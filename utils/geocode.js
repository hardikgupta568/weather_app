var request=require('request');


// //============API call using coordinated===========
// //api.openweathermap.org/data/2.5/weather?lat=34&lon=-118&appid=3d6f28da7df090902544b64ae8514253
// //Geocoding(conveting text to coordinates)
// //===========Acess Token==============
// //pk.eyJ1IjoiaGFyZGlrZ3VwdGE1NjgiLCJhIjoiY2tjNTR1bTVvMDI5eDMwbGpncjRubXl5aCJ9.ZEHhFM6EN3ceBoGOBlp5Jw
function geocode(address,callback)
{
    var url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiaGFyZGlrZ3VwdGE1NjgiLCJhIjoiY2tjNTR1bTVvMDI5eDMwbGpncjRubXl5aCJ9.ZEHhFM6EN3ceBoGOBlp5Jw&limit=1";
    request({url,json:true},function(err,{body})
    {
        if(err)
        {
            callback('unable to connect to services',undefined);
        } 
        else if(body.features.length==0)
        {
            callback('unable to connect to services',undefined);
        }
        else
        {
            callback(undefined,{
                lat:body.features[0].center[1],
                long:body.features[0].center[0],
                location:body.features[0].place_name
            });
        }
    })
}

module.exports=geocode;