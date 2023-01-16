import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _auth: any;

  loginForm: FormGroup;
  myForm: any;
  serverResponse:any;
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
   }

  ngOnInit(): void {
  }
 
  isValid(controlName: any) {
    return this.loginForm.get(controlName)?.invalid && this.myForm.get(controlName)?.touched;
  }

  login() {
    if(this.loginForm.valid){
    this._myservice.login(this.loginForm.value)
    .subscribe(
    data => {
      console.log(data);
      this._router.navigate(["index"])
      this.setToken(data);
      this.serverResponse=data;
      this.serverResponse.user.roles.forEach((role: { name: string; })=>{
        if(role.name=="ROLE_USER"){
          this._router.navigate(['index'])
        }
        else{
          this._router.navigate(["adminindex"])
        }
      })
    }
    );
  }

  }
  setToken(data:any){
    localStorage.setItem("token",data.accessToken)
  }
  movetoregister() {
    this._router.navigate(['../register'], {relativeTo: this._activatedRoute});
  }
  
}


