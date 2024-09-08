import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {CartComponent} from './components/cart/cart.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import {MatTableModule} from "@angular/material/table";
import {ViewOrderedProductsComponent} from "./components/view-ordered-products/view-ordered-products.component";
import { ReviewOrderedProductComponent } from './components/review-ordered-product/review-ordered-product.component';
import {MatSelectModule} from "@angular/material/select";
import { ViewProductDetailComponent } from './components/view-product-detail/view-product-detail.component';
import { ViewWishlistComponent } from './components/view-wishlist/view-wishlist.component';

@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent,
    PlaceOrderComponent,
    MyOrdersComponent,
    ViewOrderedProductsComponent,
    ReviewOrderedProductComponent,
    ViewProductDetailComponent,
    ViewWishlistComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatTableModule,
        MatSelectModule
    ]
})
export class CustomerModule {
}
