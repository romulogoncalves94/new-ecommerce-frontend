import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserStorageService} from "../../services/storage/user-storage.service";

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addCategory(categoryDTO): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/category', categoryDTO, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCategories(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/admin/categories', {
      headers: this.createAuthorizationHeader(),
    })
  }

  addProduct(productDTO): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/product', productDTO, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProducts(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/admin/products', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProductByName(name): Observable<any> {
    return this.http.get(BASIC_URL + `api/admin/search/${name}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }

}
