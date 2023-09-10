import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: "" , redirectTo :"home" ,pathMatch:"full"},
  {path: "home" , component: HomeComponent},
  {path: "about" , component: AboutComponent},
  {path: "protfolio" , component: ProtfolioComponent},
  {path: "contact" , component: ContactComponent},
  {path: "**" , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
