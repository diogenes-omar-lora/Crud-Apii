import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearComponent } from './components/hear/hear.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HearComponent,
    FooterComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
