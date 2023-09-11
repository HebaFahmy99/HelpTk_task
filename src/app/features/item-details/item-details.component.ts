import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  itemdetails:any ;
  constructor(private _ApiService:ApiService) { }

  ngOnInit(): void { 
    let id = this._ApiService.itemId; 
    this._ApiService.GetDataById(id).subscribe((response)=>{ 
      this.itemdetails =  response.data;      
    })
    
  }

}
