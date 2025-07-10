import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClothingLoginService {
  private usuarios = [
    { username: 'admin', password: '1234', rol: 'admin' }
  ];

  login(username: string, password: string): boolean {
    const usuario = this.usuarios.find(
      u => u.username === username && u.password === password
    );
    if (usuario) {
      localStorage.setItem('rol', usuario.rol);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  getRol(): string | null {
    return localStorage.getItem('rol');
  }
}
