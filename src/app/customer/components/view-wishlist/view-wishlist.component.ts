import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.css']
})
export class ViewWishlistComponent implements OnInit {

  products = [];

  constructor(
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.getWishListByUserId();
  }

  getWishListByUserId() {
    this.customerService.getWishListByUserId().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
      });
    });
  }

}
