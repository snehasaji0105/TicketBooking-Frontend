import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-adminaddticket',
  templateUrl: './adminaddticket.component.html',
  styleUrls: ['./adminaddticket.component.css']
})
export class AdminaddticketComponent implements OnInit {
  private _auth: any;
  adminaddticketForm: FormGroup;
  myForm: any;
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.adminaddticketForm = new FormGroup({
      busNumber: new FormControl(null, Validators.required),
      destination: new FormControl(null, Validators.required),
     source: new FormControl(null, Validators.required),
     bookedBy: new FormControl(null, Validators.required),
     journeyDate: new FormControl(null, Validators.required),
     bookingDate: new FormControl(null, Validators.required),
     no_of_passengers: new FormControl(null, Validators.required)
     
    })
   }

 

  ngOnInit(): void {
  }

  isValid(controlName: any) {
    return this.adminaddticketForm.get(controlName)?.invalid && this.myForm.get(controlName)?.touched;
  }

  adminaddticket(){
    console.log(this.adminaddticketForm.value);
    if(this.adminaddticketForm.valid){
    this._myservice.adminaddticket(this.adminaddticketForm.value)
    .subscribe(
    data => {
      this._router.navigate(["viewticket"])
     
    }
    );
  }

  }


}
