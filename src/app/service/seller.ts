import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'; 
import { signup } from '../data-type';
@Injectable({
  providedIn: 'root',
})
export class Seller {
  constructor(private http:HttpClient) {}
  userSignup(data: signup) {
    return this.http.post('http://localhost:3000/seller', data);
  }
}
