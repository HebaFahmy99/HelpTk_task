import { Component, OnInit } from '@angular/core'; 
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  OrganizationList:any[]= [];
  constructor(private _ApiService:ApiService) { }

  ngOnInit(): void { 
    this._ApiService.GetData().subscribe((response)=>{  
      this.OrganizationList = response.data;      
    })
  }

}
