import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) { }

   
   private dbPath = "/diseases";   
   public diseases;
ima;

  ngOnInit() {
    this.db.list(this.dbPath).subscribe(data=>{
      this.diseases = data;
      console.log(this.diseases)
    },err=>{
       console.log(err);
    });
  }
setImage(){

}

getImage(event, image){
    //console.log('change no input file', readerEvt);
    let file = event.srcElement.files[0];
    var reader = new FileReader();
    let yy;
    reader.readAsDataURL(file);
    reader.onload = function () {
        // console.log('base64 do arquivo',reader.result);  
       let y = reader.result;
       let b= y.toString();
      // console.log(b);
     yy= b;
        
             
        //console.log('base64 do arquivo codificado',midia.binario);
    };
    reader.onerror = function (error) {
        console.log('Erro ao ler a imagem : ', error);
    };
   setTimeout(()=>{
      this.ima = yy;
   console.log(this.ima); 

   },3000)
}

   add(value){

       console.log(value); 
   	 this.db.list(this.dbPath).set(value.name, {
        image:this.ima,
        solution:value.solution
      });
   }

   delete(key){
   	 this.db.list(this.dbPath).remove(key).catch(error=>{
   	 	console.log(error)
   	 });
   } 

}
