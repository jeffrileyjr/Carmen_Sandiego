import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { Location1Component } from './location1/location1.component';
import { Location2Component } from './location2/location2.component';
import { Location3Component } from './location3/location3.component';
import { Location4Component } from './location4/location4.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { ClockService} from './clock.service';
import { GameoverComponent } from './gameover/gameover.component';
import { ScoresComponent } from './scores/scores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [
  { path: "", redirectTo: "/landing-page", pathMatch: "full" }, //goes to landing page
  { path: "landing-page", component: LandingPageComponent },
  { path: "home", component: HomeComponent, data: { animations: 'isLeft'}  },
  { path: "gameover", component: GameoverComponent, data: { animation: 'isRight'} },
  { path: "location1", component: Location1Component, data: { animation: 'isRight'} },
  { path: "location2", component: Location2Component, data: { animation: 'isLeft'}  },
  { path: "location3", component: Location3Component, data: { animation: 'isRight'} },
  { path: "location4", component: Location4Component, data: { animation: 'isLeft'}  },
  { path: "scores", component: ScoresComponent, data: { animation: 'isLeft'} }

]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    Location1Component,
    Location2Component,
    Location3Component,
    Location4Component,
    GameoverComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
