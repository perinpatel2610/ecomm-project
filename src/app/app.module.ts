import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    SearchComponent,
    FooterComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    CartPageComponent,
    CheckoutComponent,
    MyOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
