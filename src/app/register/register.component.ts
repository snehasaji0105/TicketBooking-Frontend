import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myForm: FormGroup;
  successMessage = 'Registered Successfully';

  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      // confirmpassword: new FormControl(null)

    });

    // this.myForm.controls.password.valueChanges
    // .subscribe(
    //   x => this.myForm.controls.confirmpassword.updateValueAndValidity()
    // );
   }

  ngOnInit(): void {
  }

  isValid(controlName: any) {
    return this.myForm.get(controlName)?.invalid && this.myForm.get(controlName)?.touched
  }

//  passValidator(control: AbstractControl) {
//    if (control && (control.value !== null || control.value !== undefined)) {
//      const confirmpassword = control.value;

//      const passControl = control.root.get('password');
//      if(passControl) {
//        const passValue = passControl.value;
//        if (passValue !== confirmpassword || passValue === '') {
//          return{
//            isError: true
//          }
//        }
//            }
//    }
//  }

register(){
  console.log(this.myForm.value)
  if(this.myForm.valid){
  this._myservice.submitRegister(this.myForm.value)
  .subscribe(
    data => {
      this.successMessage = 'Registration Success';
      this._router.navigate(['login'])
    }
  );
}


}

movetologin() {
  this._router.navigate(['../login'], {relativeTo: this._activatedRoute});
}

}
