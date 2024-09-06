import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getPlacedOrders();
  }

  getPlacedOrders() {
    this.adminService.getPlacedOrders().subscribe(res => {
      this.orders = res;
    });
  }

  changeOrderStatus(orderId: number, status: string) {
    return this.adminService.changeOrderStatus(orderId, status).subscribe(res => {
      if (res.id != null) {
        this.snackBar.open("Order status changed successfully", "Close", {
          duration: 5000
        });
        this.getPlacedOrders();
      } else {
        this.snackBar.open("Something went wrong", "Close", {
          duration: 5000
        });
      }
    });
  }

}
