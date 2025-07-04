import {Component, OnInit} from '@angular/core';
import { Clothes } from './Clothes';
import {ClothingCartService} from '../clothing-cart.service';
import {ClothingDataService} from '../clothing-data.service';

@Component({
  selector: 'app-clothes-list',
  standalone: false,
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent implements OnInit{
  clothes : Clothes[] = [];
  constructor(private cart : ClothingCartService, private clothingDataService: ClothingDataService) {
  }
  addToCart(clothing : Clothes): void {
    this.cart.addToCart(clothing);
    clothing.stock -= clothing.quantity;
    clothing.quantity = 0;
  }
  maxReached(m : String){
    alert(m)
  }

  ngOnInit(): void {
    this.clothingDataService.getAll().subscribe(clothes => this.clothes = clothes);
  }
}
