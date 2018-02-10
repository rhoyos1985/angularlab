import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { NameGenderComponent } from './namegender.component';
import { RouterModule, Routes } from '@angular/router';


const myRoots: Routes = [
  { path: '', redirectTo: '/namegender', pathMatch: 'full' },
    { path: 'namegender', component: NameGenderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NameGenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // cargamos el módulo en el array de imports
    RouterModule.forRoot(myRoots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
