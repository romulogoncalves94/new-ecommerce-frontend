import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getMyOrders();
  }

  getMyOrders() {
    this.customerService.getMyPlacedOrders().subscribe(res => {
      this.myOrders = res;
    });
  }

}
