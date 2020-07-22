var request = require('request');
var express = require('express');
var geocode = require('./utils/geocode');
var forecast = require('./utils/forecast');
const { render } = require('ejs');
var app = express();
app.use(express.static(__dirname + '/public'));
//var address=process.argv[2];
// if(!address)
// {
//     console.log("Please Provide the location");
// }
// else
// {
//     geocode(address,function(err,{lat,long,location}){
//         if(err)
//         {
//             return console.log(err);
//         }
//         forecast(lat, long, (error, forecastData) => {
//             if(error)
//             {
//                 return console.log(error);
//             }
//             console.log(location);
//             console.log(forecastData);
//         })
//     })
// }

app.get('/', function(req, res) {
    res.render('index.ejs');
})
app.get('/result', function(req, res) {
    var address = req.query.address;
    if (!address) {
        res.redirect('/');
    } else {
        geocode(address, function(err, { lat, long, location }) {
            if (err) {
                res.redirect('/');
            }
            forecast(lat, long, (error, forecastData) => {
                if (error) {
                    res.redirect('/')
                }
                console.log(location);
                console.log(forecastData);
                res.render('result.ejs', { location: location, text: forecastData });
            })
        })
    }

})
app.listen(3000, function() {
    console.log('starting');
})