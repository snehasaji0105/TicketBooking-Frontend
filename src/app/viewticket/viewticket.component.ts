import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css']
})
export class ViewticketComponent implements OnInit {
  private _router: any;
  tickets:any=[]

  constructor(private _myservice: MyserviceService) { }

  ngOnInit(){
    
  this._myservice.viewticket().subscribe((res:any) => {
    
    console.log(res)
      this.tickets=res
    })
    console.log(this.tickets)
  

    }




    // delete(busNumber:any){
    //   this._myservice.cancelticket(busNumber).subscribe((res) => {
    //     console.log(res)
        
    //   })



    // }

  }

 
  
  

  


