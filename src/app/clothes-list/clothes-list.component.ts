import {Component, OnInit} from '@angular/core';
import { Clothes } from './Clothes';
import { ClothingCartService } from '../clothing-cart.service';
import { ClothingDataService } from '../clothing-data.service';
import {ClothingLoginService} from '../clothes-login/clothing-login.service';

@Component({
  selector: 'app-clothes-list',
  standalone: false,
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent implements OnInit{
  clothes : Clothes[] = [];

  constructor(private cart : ClothingCartService, private clothingDataService: ClothingDataService, private loginService : ClothingLoginService) {
  }


  esAdmin(): boolean {
    return this.loginService.esAdmin();
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

  eliminar(id: string): void {
    console.log('Recibido:', id, typeof id);

    if (confirm('¿Estás segura/o de que querés eliminar esta prenda?')) {
      this.clothingDataService.delete(id).subscribe({
        next: () => {
          alert('Prenda eliminada con éxito');
          this.clothingDataService.getAll().subscribe(clothes => this.clothes = clothes);
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('Hubo un error al eliminar la prenda');
        }
      });
    }
  }

}
