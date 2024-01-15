import { ContactPageComponent } from './shared/page/contact-page/contact-page.component';
import { AboutPageComponent } from './shared/page/about-page/about-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/page/home-page/home-page.component';

const routes: Routes =[
  // {
  // path: '' ,
  //  component:HomePageComponent
  // },
  {
    path: 'about' ,
     component:AboutPageComponent
    },
    {
      path: 'contact' ,
       component:ContactPageComponent
    },
    {
      path: 'countries' ,
      loadChildren:()=>import('./countries/countries.module').then(m =>m.CountriesModule) 
    },
    {
      path: '**' ,
       redirectTo:'countries'
     }
     ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
 
    providers: [],
})
export class AppRoutingModule { }
