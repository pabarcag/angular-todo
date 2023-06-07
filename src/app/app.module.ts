import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { TaskModule } from './modules/task/task.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeChildOneComponent } from './home-child-one/home-child-one.component';
import { HolmeChildTwoComponent } from './holme-child-two/holme-child-two.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChildOneComponent,
    HolmeChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
