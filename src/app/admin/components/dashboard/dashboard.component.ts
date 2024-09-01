import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: any[] = [];
  searchProductForm!: FormGroup;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadForm();
    this.getAllProducts();
  }

  loadForm() {
    this.searchProductForm = this.fb.group({
      title: [null, Validators.required]
    })
  }

  getAllProducts() {
    this.products = []
    this.adminService.getAllProducts().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg
        this.products.push(element);
      });
    });
  }

  submitForm() {
    this.products = []
    const title = this.searchProductForm.get('title')!.value;
    this.adminService.getAllProductByName(title).subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg
        this.products.push(element);
      });
    });
  }

}
