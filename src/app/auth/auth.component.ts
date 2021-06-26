import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm:FormGroup;
  isLogin:boolean = false;

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'password' : new FormControl(null ,[Validators.required , Validators.minLength(6)])
    })
  }

  onChangeMode(){
    this.isLogin = !this.isLogin;
  }

  onSubmit(){
      this.router.navigate(['/' , 'main-page'] , {relativeTo:this.route});
  }

}
