import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';
import {LoginComponent} from './clothes-login/clothes-login.component';
import {ClothesAdministrationComponent} from './clothes-administration/clothes-administration.component';

const routes: Routes = [
  {path: '', redirectTo: 'clothes', pathMatch: "full"},
  {path: 'clothes', component: ClothesListComponent},
  {path: 'about', component: ClothesAboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'administration', component: ClothesAdministrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
