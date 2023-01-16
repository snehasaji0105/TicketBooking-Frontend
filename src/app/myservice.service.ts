import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  editticket(id: any) {
    throw new Error('Method not implemented.');
  }
  updateticket(id: any) {
    throw new Error('Method not implemented.');
  }
  // adminviewticket() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private _http: HttpClient) { }
  submitRegister(body:any){
    return this._http.post("http://localhost:8080/auth/register", body,{
      observe:'body'
    });
    
  }

  login(body:any){
    
    return this._http.post("http://localhost:8080/auth/login", body,{
      observe:'body'
    });
    
  }
  bookticket(body:any){
    console.log(body)
    return this._http.post("http://localhost:8080/api/add-tickets", body,{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}});
    
  }


  viewticket(){

    return this._http.get<any>("http://localhost:8080/api/get-tickets",{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}});
    
  }

  cancelticket(id:any){
  
    return this._http.delete<any>(`http://localhost:8080/api/delete-tickets/${id}`,{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}});
  }

  // adminlogin(body:any){
    
  //   return this._http.post("http://localhost:8080/auth/login", body,{
  //     observe:'body'
  //   });
    
  // }
  adminaddticket(body:any){
    console.log(body)
    return this._http.post("http://localhost:8080/api/add-tickets", body,{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}});
    
    }

    adminviewticket(){

      return this._http.get<any>("http://localhost:8080/api/get-tickets",{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}});
      
    }

    adminedit(id:any){

      return this._http.put<any>("http://localhost:8080/api/update-tickets/id",{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}});
      
    }


    
    
  }

 
  
  



