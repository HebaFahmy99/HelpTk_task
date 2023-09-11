import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ItemDetailsComponent } from './features/item-details/item-details.component';
import { MenuComponent } from './shared/menu/menu.component';

const routes: Routes = [  
  {path:'',component:MenuComponent},
  {path:'home/:id',component:HomeComponent}, 
  {path:'itemdetails',component:ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
