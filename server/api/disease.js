//api logic for disease js
const firebase = require('../firebase.js');
var base64Img = require('base64-img');

let db = firebase.database().ref();

//opencv
var cv = require('../opencv/lib/opencv');

module.exports.check= function(data){
    //now this will get the imageBase64
    let result;

    let crop = data.cropName;
   // let currentBase64 = data.img;
    let currentImg= data.img;
    // //convert that from base64
    // base64Img.img(currentBase64, './files/', 'current', function(err, filepath) {
    // let currentImg = fielPath;
    // });



    db.child(crop).on('value', (snap)=>{
        //now get the image
        let cropImg = snap.val().img;

        if (cv.ImageSimilarity === undefined) {
  console.log('TODO: Please port Features2d.cc to OpenCV 3')
  process.exit(0);
}
                                                                                                                                                                                                                                         
cv.readImage(cropImg, function(err, cropImg) {
  if (err) throw err;

  cv.readImage(currentImg, function(err, currentImg) {
    if (err) throw err;

    cv.ImageSimilarity(cropImg, currentImg, function (err, dissimilarity) {
      if (err) throw err;
      console.log('Dissimilarity: ', dissimilarity);

      //now if the dissimilarity is greater than 10 
      if(dissimilarity<=10){
          db.child(cropName).on('value', (snap)=>{
              result =snap.val();
              result.message ="Apple disease found";
              result.similarity = 100-dissimilarity;
          })
      }else if(dissimilarity>10 && dissimilarity<=30) { //or a little bit dissimilar
          console.log('err- Photo not proper')
        // result.message = "error: Please,take a fine Photo for processing ";

      }else{ //or totally dissimilar photo
         console.log("error: Not an apple or relevant disease not found.");
      }
      return result;
    });

  
    });
  });
});

}
