import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, priceSummary, product } from '../data-type';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser
  public isCollapsed = false;  
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = '';
  searchResult: undefined | product[];
  cartItems=0;
  cartData: cart[] = [];

  
  constructor(private route: Router, private product:ProductService){}

  ngOnInit(): void {

    setInterval(() => {
      if (localStorage.getItem('user')){

        this.loadDetails();
      }
    }, 200);

    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
         let sellerStore=localStorage.getItem('seller');
         let sellerData =sellerStore && JSON.parse(sellerStore)[0];
         this.sellerName=sellerData.name;
          this.menuType = 'seller';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';
          this.product.getCartList(userData.id);
        }
         else {
          this.menuType = 'default';
        }
      }
    });

    let cartData=localStorage.getItem('localCart');
    if(cartData){
      this.cartItems=JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems=items.length;
    })
  }
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
        this.cartItems = totalQty
      })
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth'])
    this.product.cartData.emit([]);
  }
  searchProduct(query:KeyboardEvent){
    if(query){
      const element= query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result)=>{
        console.warn(result);
        if(result.length>5){
          result.length=5;
        }
        this.searchResult=result;
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined;
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
  submitSearch(val:string){
    this.route.navigate([`search/${val}`])
  }
}
