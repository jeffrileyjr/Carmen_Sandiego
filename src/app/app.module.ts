import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { FormsModule } from '@angular/forms';
import { WikiService } from'./wiki.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
