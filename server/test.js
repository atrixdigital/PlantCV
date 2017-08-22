const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var base64Img = require('base64-img');

const diseaseRoute = require('./routes/disease');


app.use('/api/disease', diseaseRoute);


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.static(__dirname + '/public'));



app.post('/test', (req,res)=>{
  //i have a body in base64
  let d=req.body.img64;


  //convert that from base64
    base64Img.img(img64, './files/', 'current', function(err, filepath) {
    let currentImg = fielPath;
    });
})




    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log('running on 3000')
})