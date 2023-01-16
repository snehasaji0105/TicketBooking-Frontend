import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  private _auth: any;
  bookticketForm: FormGroup;
  myForm: any;
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.bookticketForm = new FormGroup({
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
    return this.bookticketForm.get(controlName)?.invalid && this.myForm.get(controlName)?.touched;
  }

  bookticket(){
    
    if(this.bookticketForm.valid){
    this._myservice.bookticket(this.bookticketForm.value)
    .subscribe(
    data => {
      this._router.navigate(["viewticket"])
     
    }
    );
  }

  }

  // bookticket() {
  //   this._router.navigate(['../bookticket'], {relativeTo: this._activatedRoute});
  // }

}
