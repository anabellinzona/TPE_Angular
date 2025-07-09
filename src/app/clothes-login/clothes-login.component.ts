import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ClothingLoginService} from './clothing-login.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'clothes-login.component.html',
  imports: [
    FormsModule
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: ClothingLoginService, private router: Router) {}

  login(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/administration']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
