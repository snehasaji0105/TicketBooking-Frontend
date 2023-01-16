import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-adminviewticket',
  templateUrl: './adminviewticket.component.html',
  styleUrls: ['./adminviewticket.component.css']
})
export class AdminviewticketComponent implements OnInit {

  private _router: any;
  tickets:any=[]
  
  constructor(private _myservice: MyserviceService) { }

  ngOnInit(){
    
  this._myservice.adminviewticket().subscribe((res:any) => {
    
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

// edit(id:any){
//   this._myservice.adminedit(id).subscribe((res:any) => {
//     console.log(res)
    
//   })
// }

// function id(id: any) {
//   throw new Error('Function not implemented.');
// }

// function edit(id: (id: any) => void, any: any) {
//   throw new Error('Function not implemented.');
// }

}