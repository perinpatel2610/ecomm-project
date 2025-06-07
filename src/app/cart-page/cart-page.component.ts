import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, priceSummary } from '../data-type';
import { Router } from '@angular/router';
import {faRightLong, faLeftLong,faTrash} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  faRightLong =faRightLong 
  faLeftLong = faLeftLong
  faTrash =faTrash

  cartItems= 0 ;
  // cartData:cart[] | undefined;
  cartData: cart[] = [];

  

  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0,
    totalQty: 0
  }
  
  constructor(private product:ProductService, private router:Router) {}
  ngOnInit(): void {
    this.loadDetails();
    // console.warn(cartData);
    // this.loadToCart();
  }



  checkout(){
    this.router.navigate(['/checkout']);
  }

  removeToCart(cartId:number | undefined){
    cartId && this.product.removeToCart(cartId)
        .subscribe((result) => {
          this.loadDetails();
        })
  }

  // loadToCart(): void {
  //   const productId = 1; // Replace with your product ID
  //   const quantity = 2; // Replace with the desired quantity

  //   this.cartService.mergeData(productId, quantity)
  //     .subscribe(data => {
  //       // Handle the merged data here
  //       console.log('Merged data:', data);
  //     });

  // }


  

  loadDetails(){
    this.product.currentCart().subscribe((result)=>{
      this.cartData = result; 
      // console.warn(result);
      let totalQty=0;
      result.forEach((item)=>{
        if(item.quantity){
          // console.warn(item.quantity);
          totalQty = totalQty + item.quantity
          // console.warn(totalQty);
        }
        this.priceSummary.totalQty = totalQty
      })
      
      
      let price=0;
      result.forEach((item)=>{
        if(item.quantity){
          price = price+(+item.price* + item.quantity);
        }
      });
      this.priceSummary.price=price;
      this.priceSummary.discount=price/10;
      this.priceSummary.tax=price/10;
      this.priceSummary.delivery=100;
      this.priceSummary.total=price+(price/10)+100-(price/10);
      if(!this.cartData.length){
        this.router.navigate(['/']);
      }
    });
  }

}
