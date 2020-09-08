import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { MainComponent } from './main/main.component';
import { ButtonsComponent } from '../app/main/buttons/buttons.component';
import { MaintextComponent } from './main/maintext/maintext.component';
import { SalesinfoComponent } from './salesinfo/salesinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    MainComponent,
    ButtonsComponent,
    MaintextComponent,
    SalesinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
