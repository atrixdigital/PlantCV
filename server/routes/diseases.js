const express = require('express');
const router = express.Router();
var base64Img = require('base64-img');

//opencv
var cv = require('../opencv/lib/opencv');

const firebase = require('../firebase');

//working with diseaseJS 
let currentImg,dbImg,result;
let db = firebase.database().ref();
// let d = db.child('diseases');
let y;


//this will make the special change to database
// router.post('/special', (req,res)=>{
// let data = req.body;
// console.log('clicked in specials')



// firebase.database().ref().child('diseases').child(req.body.name).update({
//   image:data.currentImg
// }).then((data)=>{
//   console.log('uploaded')
//   res.end();

// })

// // res.json({message:'Uploaded to Firebase'});

// });



router.post('/', (req,res)=>{
  //let resp=  Disease.check(req.body);
 /// req.body.name == will cotain name of crop
 /// req.body.photo == will cotain current Image
 /// database have name,solution,image
console.log(req.body);
    //db check image - for crop name
    firebase.database().ref().child('diseases').child('apple').on('value', (snap)=>{
  
      let x = new Promise((resolve,reject)=>{
 //converting database base64 to Image
      let currentBase64 = snap.val().image;
      base64Img.img(currentBase64, './files/', 'db', function(err, filepath) {
        if(err) return console.log(err);
        let dbImg = filepath; 
        console.log(dbImg);
    }); 

    //converting uploaded base64 to Image
      base64Img.img(req.body.currentImg, './files/', 'current', function(err, filepath) {
        if(err) return console.log(err);
        let currentImg = filepath; 
      // console.log(currentImg);
    });

     setTimeout(function(){
    resolve("success"); // Yay! Everything went well!
  }, 2000);
      })
     
    x.then((msg)=>{

  
        //this will get the db Image
cv.readImage('./files/db.jpg', function(err, img1) {
  if (err) throw err;
  //this will get the Uploaded Image
  cv.readImage('./files/current.jpg', function(err, img2) {
    if (err) throw err;
    //now this will test out Image similiarity between them
    cv.ImageSimilarity(img1, img2, function (err, dissimilarity) {
      if (err) throw err;
      console.log('Dissimilarity: ', dissimilarity);
        let diss = dissimilarity;
     //now if the dissimilarity is greater than 10 
      if(diss<=35){
        console.log(diss);
        let data = {
          message:'photo matched',
          dissimilarity:diss,
          solution:snap.val().solution
        }
        console.log(data.message + 'dis: '+data.dissimilarity)
        res.json(data);
      }else if(diss>35 && diss<=60) { //or a little bit dissimilar
  let data = {
          message:'photo not that much similar',
          dissimilarity:diss,
          solution:snap.val().solution
        }
        console.log(data.message + 'dis: '+data.dissimilarity)
        res.json(data);
      }else{ //or totally dissimilar photo
          let data = {
          message:'Total dissimilar',
          dissimilarity:diss,
          solution:' Sorry! Please take another Photo'
        }
        console.log(data.message + ' dis: '+data.dissimilarity)
        res.json(data);
      }
              
      
    }); //img similarity
  }); //img1
      }); //img2
      }); //promise .then
      }); //closing firebase
     }); //closing route
   

     //this is for web 
    router.post('/add', (req,res)=>{
      let data = req.body; 
      firebase.database().ref().child('diseases').child(req.body.name).set({
        photo:req.body.image,
        solution:req.body.solution,
        name: req.body.name
      });
      res.end();
    })
  


//spring lazy farm soccer glow quality zoo vivid stree trip slight glove
//marble wreck tuiton assume hat edit swap inquiry debris town arrest tree

module.exports = router;