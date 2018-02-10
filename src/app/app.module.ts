import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { NameGenderComponent } from './namegender.component';
import { NumberComponent } from './number.component';
import { RouterModule, Routes } from '@angular/router';


const myRoots: Routes = [
    // { path: '', redirectTo: 'namegender', pathMatch: 'full' },
  { path: 'namegender', component: NameGenderComponent },
  { path: 'number', component: NumberComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NameGenderComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // cargamos el módulo en el array de imports
    HttpModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
