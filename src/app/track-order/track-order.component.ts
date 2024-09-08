import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  searchOrderForm!: FormGroup;
  order: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.searchOrderForm = this.fb.group({
      trackingId: [null, Validators.required]
    });
  }

  searchOrderByTrackingID() {
    const trackingId = this.searchOrderForm.get('trackingId').value;
    this.authService.searchOrderByTrackingID(trackingId).subscribe(res => {
      console.log(res);
      this.order = res;
      // if (res.id != null) {
      //   this.snackBar.open('Coupon posted successfully!', 'Close', {
      //     duration: 5000
      //   });
      // } else {
      //   this.snackBar.open('Coupon posted successfully!', 'Close', {
      //     duration: 5000
      //   });
      // }
    })
  }

  submitForm() {
    this.searchOrderByTrackingID();
  }
}
