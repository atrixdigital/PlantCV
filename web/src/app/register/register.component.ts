import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

import {FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error;

  constructor(public authService: AuthService,private router:Router,private userService : UserService) {}

  
  onSubmit(value) {
  	
    this.authService.signup(value.email, value.password)
    .then( res=>{
       console.log(res.uid);
       this.router.navigateByUrl('/login');

    }).catch(err => {
    
        this.error = err.message;

        setTimeout(()=>{
           // this.router.navigateByUrl('/register');
           this.error = false;
        } , 3000);
    })
    // this.email = this.password = '';
  }

  ngOnInit() {
  }

}
