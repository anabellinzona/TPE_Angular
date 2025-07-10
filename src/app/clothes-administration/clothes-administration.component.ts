import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ClothingDataService } from '../clothing-data.service';

@Component({
  selector: 'app-clothes-administration',
  templateUrl: './clothes-administration.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './clothes-administration.component.scss'
})
export class ClothesAdministrationComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: ClothingDataService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      product: ['', Validators.required],
      size: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      image: ['', Validators.required]
    });
  }

  guardar(): void {
    if (this.form.invalid) {
      alert('Por favor, completá todos los campos correctamente.');
      return;
    }

    const producto = this.form.value;
    console.log('Producto a agregar:', producto);

    this.dataService.addAll(producto).subscribe({
      next: (nueva) => {
        alert('¡Prenda creada con éxito!');
        this.form.reset(); // Limpiar formulario luego de agregar
      },
      error: (err) => {
        console.error('Error al guardar:', err);
        alert('Hubo un error al guardar la prenda');
      }
    });
  }
}
