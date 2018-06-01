import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Services
import { RideService } from './core/ride/ride.service';
import { UserService } from './core/user/user.service';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [RideService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
