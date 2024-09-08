import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute} from "@angular/router";
import {UserStorageService} from "../../../services/storage/user-storage.service";

@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrls: ['./view-product-detail.component.css']
})
export class ViewProductDetailComponent implements OnInit {

  productId: number = this.activatedRoute.snapshot.params['productId'];
  product: any;
  FAQs: any[] = [];
  reviews: any[] = [];


  constructor(
    private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProductDetailById();
  }

  getProductDetailById() {
    this.customerService.getProductDetailById(this.productId).subscribe(res => {
      this.product = res.productDTO;
      this.product.processedImg = 'data:image/jpeg;base64,' + res.productDTO.byteImg;
      this.FAQs = res.faqDTOList;

      res.reviewDTOList.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.reviews.push(element);
      });
    });
  }

  addToWishList() {
    const wishListDTO = {
      productId: this.productId,
      userId: UserStorageService.getUserId()
    }

    this.customerService.addProductToWishlist(wishListDTO).subscribe(res => {
      if (res.id != null) {
        this.snackBar.open('Product added to WishList Successfully!', 'Close', {
          duration: 5000
        });
      } else {
        this.snackBar.open('Already in Wishlist', 'ERROR', {
          duration: 5000
        });
      }
    });
  }

}
