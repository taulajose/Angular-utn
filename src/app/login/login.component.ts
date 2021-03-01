import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myFormLogin:FormGroup
  constructor(private fb:FormBuilder) {
    this.myFormLogin=this.fb.group({
      name:["",[Validators.required,Validators.minLength(4)]],
      password:["",[Validators.required, Validators.minLength(6),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)]],
    })
   }

   registro(){
     console.log(this.myFormLogin.value)
   }

  ngOnInit(): void {
  }

}
