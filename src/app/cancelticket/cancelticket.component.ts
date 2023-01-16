import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.css']
})
export class CancelticketComponent implements OnInit {

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




    delete(id:any){
      this._myservice.cancelticket(id).subscribe((res: any) => {
        console.log(res)
        
      })



    }


}
function id(id: any) {
  throw new Error('Function not implemented.');
}

