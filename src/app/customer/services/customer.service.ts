import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserStorageService} from "../../services/storage/user-storage.service";

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/customer/products', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProductByName(name): Observable<any> {
    return this.http.get(BASIC_URL + `api/customer/search/${name}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  addToCart(productId): Observable<any> {
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    return this.http.post(BASIC_URL + `api/customer/cart`, cartDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  increaseProductQuantity(productId): Observable<any> {
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    return this.http.post(BASIC_URL + `api/customer/addition`, cartDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  decreaseProductQuantity(productId): Observable<any> {
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    return this.http.post(BASIC_URL + `api/customer/deduction`, cartDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getCartByUserId(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/customer/cart/${userId}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  applyCoupon(code): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/customer/coupon/${userId}/${code}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  placeOrder(orderDto): Observable<any> {
    orderDto.userId = UserStorageService.getUserId();
    return this.http.post(BASIC_URL + 'api/customer/place-order', orderDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getMyPlacedOrders(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/customer/myOrders/${userId}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getOrderedProducts(orderId: number): Observable<any> {
    return this.http.get(BASIC_URL + `api/customer/ordered-products/${orderId}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }

}
