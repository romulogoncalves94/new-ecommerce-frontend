import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  coupons: any;

  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons() {
    this.adminService.getCoupons().subscribe(res => {
      this.coupons = res.map(coupon => {
        const date = new Date(coupon.expirationDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        coupon.expirationDate = `${day}/${month}/${year}`;
        return coupon;
      });
    });
  }

}
