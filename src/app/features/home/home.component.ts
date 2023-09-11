import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject } from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute, private _ApiService:ApiService) { }
  itemDetails:any[] = []; 
  ngOnInit(): void { 
 
  this._ActivatedRoute.url.subscribe(x =>{  
    let id = x[1].path;    
    this._ApiService.GetDataById(id).subscribe((response)=>{ 
      this.itemDetails = response.data;
    })  
  }) 
 

  } 


}
