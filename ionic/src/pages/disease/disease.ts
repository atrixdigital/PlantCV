
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs'
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AndroidPermissions } from '@ionic-native/android-permissions';


// import {Http} from '@angular/http';
/**
 * Generated class for the DiseasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-disease',
  templateUrl: 'disease.html',
})
export class DiseasePage {
   constructor(private db: AngularFireDatabase,private androidPermissions: AndroidPermissions,
    public navCtrl: NavController,private camera: Camera,private http:Http, private alertCtrl: AlertController) {}
  
  @ViewChild('name') name;
  special64;
  err;
  submit = false;

  
  // 922428CF
  ionViewDidLoad() {
    console.log('ionViewDidLoad DiseasePage');
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  success => console.log('Permission granted'),
  err => this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA,this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE])
);
  }
  public base64Image: string;
 sourceSelection;
 result:any;
   private dbPath = "/diseases";   

 refrestValues(){
      this.base64Image= "";
      this.name.value = "";
    }

   takePicture(source){
   if(source=="camera"){
      this.sourceSelection = this.camera.PictureSourceType.CAMERA
}else if(source=="gallery"){
      this.sourceSelection = this.camera.PictureSourceType.PHOTOLIBRARY
}
    this.camera.getPicture({
      sourceType:this.sourceSelection,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
  //      targetWidth: 1000,
  //      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
     
    }, (err) => {
        console.log(err);
    });
}

//this will update the firebase photo
setSpecial(){

   	 this.db.list(this.dbPath).update(this.name, {
        image:this.base64Image,
      });
  //  console.log("setting up special photo")
  // let data ={
  //   currentImg:this.base64Image,
  //   name:this.name.value
  // } 
  // let myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');    
  //      let options = new RequestOptions({ headers: myHeaders });
  // this.http.post('https://plantcv.fwd.wf/disease/special',data,options)
  // .map(res=>res.json()).subscribe((data)=>{
  //   console.log(data.message);
  // },(err)=>{
  //   console.log(err);
  // });
}
onSubmit(){
  let data = {
    name: this.name.value, 
    currentImg: this.base64Image
  }

  if(!data.currentImg){
      let ImgAlert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Please upload an Image',
          buttons: ['OK']
        });
        ImgAlert.present();
  }else if(!data.name){
     let CropAlert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Please select a crop',
          buttons: ['OK']
        });
        CropAlert.present();

  }
  console.log(data);
   let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');    
       let options = new RequestOptions({ headers: myHeaders });
  this.http.post('https://plantcv.fwd.wf/disease/',data,options)
  .map(res=> res.json())
  .catch((error: Response | any)=>{
    console.log(error.message || error);
    setTimeout(()=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message  || error,
          buttons: ['OK']
        });
        alert.present();
    },10)
    return Observable.throw(error.message || error);
  })
  .subscribe(res=>{
    this.submit = true;
    this.result = res;
     setTimeout(()=>{
        let alert = this.alertCtrl.create({
          title: '<img src="'+this.base64Image+'"/>',
          subTitle: '<p>'+ this.result.message+'<br> <b>Solution :</b>'+ this.result.solution ,
          buttons: ['OK']
        });
        alert.present();
        this.refrestValues();
    },1200)
  }, err=>{
    setTimeout(()=>{
        let alert = this.alertCtrl.create({
          title: 'Result :',
          subTitle: 'Server Error'+this.result.message ,
          buttons: ['OK']
        });
        alert.present();
        this.refrestValues()
    },2200)

  })
}


}
