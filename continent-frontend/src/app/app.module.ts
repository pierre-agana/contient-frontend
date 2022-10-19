import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllContinentsComponent } from './continents/all-continents/all-continents.component';
import { AddContientComponent } from './contients/add-contient/add-contient.component';
import { FormsModule } from '@angular/forms';
import { EditContinentComponent } from './continents/edit-continent/edit-continent.component';
import { SerchContinentComponent } from './continents/serch-continent/serch-continent.component';

@NgModule({
  declarations: [
    AppComponent,
    AllContinentsComponent,
    AddContientComponent,
    EditContinentComponent,
    SerchContinentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
