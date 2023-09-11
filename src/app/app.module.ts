import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SliderComponent } from './shared/slider/slider.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './features/home/home.component';
import { ItemDetailsComponent } from './features/item-details/item-details.component'; 
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'  
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    HomeComponent,
    ItemDetailsComponent
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    RouterModule, 
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
