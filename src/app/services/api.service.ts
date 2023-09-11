import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // baseUrl = environment.baseUrl; 
  itemId:string = '';
  constructor(private _HttpClient:HttpClient) { }
  GetData():Observable<any>{ 
    return this._HttpClient.get(`http://test1test1test-001-site1.itempurl.com/api/Project/Get`);
  } 
  GetDataById(id:string):Observable<any>{  
    this.itemId = id;
    return this._HttpClient.get(`http://test1test1test-001-site1.itempurl.com/api/Project/Get?Id=${id}`)
  }
}
