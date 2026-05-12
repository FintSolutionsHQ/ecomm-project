import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seller } from '../service/seller';
import { signup } from '../data-type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css',
})
export class SellerAuth {
  constructor(private seller: Seller, private router: Router) {
    
  }
  signUp(data: signup): void {
  //  console.warn(data)
    this.seller.userSignup(data).subscribe((result) => {
      //return result;
     if (result) {
        this.router.navigate(['/seller-home']);
      }
    });
  }
}
