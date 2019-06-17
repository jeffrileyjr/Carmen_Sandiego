import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { Location1Component } from './location1/location1.component';
import { Location2Component } from './location2/location2.component';
import { Location3Component } from './location3/location3.component';
import { Location4Component } from './location4/location4.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'


const appRoutes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  { path: "landing-page", component: LandingPageComponent },
  { path: "home", component: HomeComponent },
  { path: "location1", component: Location1Component },
  { path: "location2", component: Location2Component },
  { path: "location3", component: Location3Component }


]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    Location1Component,
    Location2Component,
    Location3Component,
    Location4Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
