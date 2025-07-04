import {Component, OnInit} from '@angular/core';
import {Clothes} from '../clothes-list/Clothes';
import {ClothingCartService} from '../clothing-cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  title : string = "Carrito de compras";
  cartList$: Observable<Clothes[]>;
  constructor(private cart : ClothingCartService) {
    this.cartList$ = cart.shopList.asObservable();
  }

  ngOnInit(): void {
  }
}
