import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClothingLoginService {
  private usuarios = [
    { username: 'admin', password: '1234', rol: 'admin' },
    { username: 'cliente', password: '5678', rol: 'user' },
  ];

  private usuarioLogueado: any = null;

  login(username: string, password: string): boolean {
    const usuario = this.usuarios.find(
      u => u.username === username && u.password === password
    );
    if (usuario) {
      console.log("entró");
      this.usuarioLogueado = usuario;
      localStorage.setItem('rol', usuario.rol);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  getRol(): string | null {
    return localStorage.getItem('rol');
  }

  esAdmin(): boolean {
    return this.getRol() === 'admin';
  }
}
