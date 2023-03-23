import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  remove(id: number) {
    //não precisa observar pq não vai atribuir a nada
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }
}
