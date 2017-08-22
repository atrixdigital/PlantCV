const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT | 3000;


const soil = require('./routes/soil.js')
const disease = require('./routes/diseases');

app.use(express.static(__dirname +'/client'))

app.use(bodyParser.json({
  type:'application/json',
  limit:'50mb'
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/disease', disease);
app.use('/sensor', soil);



app.listen(PORT, function(){
  console.log('running on'+PORT)
});