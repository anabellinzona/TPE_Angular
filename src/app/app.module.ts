import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { FormsModule } from '@angular/forms';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';
import { CostumeClotheComponent } from './costume-clothe/costume-clothe.component';
import { CartComponent } from './cart/cart.component';
import { InputNumberClothingComponent } from './input-number-clothing/input-number-clothing.component';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
