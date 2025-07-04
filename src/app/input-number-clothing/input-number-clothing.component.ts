import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number-clothing',
  standalone: false,
  templateUrl: './input-number-clothing.component.html',
  styleUrl: './input-number-clothing.component.scss'
})
export class InputNumberClothingComponent implements OnInit{
  constructor() {
  }
  @Input()
  quantity!: number;
  @Input()
  max!: number

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>()
  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>()

  ngOnInit(): void{

  }

  upQuantity() : void{
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit("Se ha llegado al máximo");
    }
  }

  downQuantity() : void{
    if(this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event : Event) : void {
    console.error(event);
    this.quantityChange.emit(this.quantity);
  }
}
