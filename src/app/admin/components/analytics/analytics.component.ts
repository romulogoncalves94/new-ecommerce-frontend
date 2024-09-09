import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  data: any;

  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.getAnalytics();
  }

  getAnalytics() {
    this.adminService.getCalculateAnalytics().subscribe(res => {
      console.log(res)
        this.data = res;
    });
  }

}
