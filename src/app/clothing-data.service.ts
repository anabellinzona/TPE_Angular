import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Clothes} from './clothes-list/Clothes';

const URL = 'https://64a06ae8ed3c41bdd7a7499e.mockapi.io/api/Clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothingDataService {

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Clothes[]>{
    return this.http.get<Clothes[]>(URL).pipe(tap((clothes : Clothes[]) => clothes.forEach(clothes => clothes.quantity = 0)))
  }
}
