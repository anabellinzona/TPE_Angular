import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';
import { CostumeClotheComponent } from './costume-clothe/costume-clothe.component';
import { CartComponent } from './cart/cart.component';
import { InputNumberClothingComponent } from './input-number-clothing/input-number-clothing.component';
import { HttpClientModule } from '@angular/common/http';
import { ClothesAdministrationComponent } from './clothes-administration/clothes-administration.component';
@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ClothesAboutComponent,
    CostumeClotheComponent,
    CartComponent,
    InputNumberClothingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClothesAdministrationComponent
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
