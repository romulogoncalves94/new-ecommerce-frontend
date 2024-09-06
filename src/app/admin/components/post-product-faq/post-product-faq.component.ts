import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminService} from "../../services/admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-product-faq',
  templateUrl: './post-product-faq.component.html',
  styleUrls: ['./post-product-faq.component.css']
})
export class PostProductFaqComponent implements OnInit {

  productId: number = this.activatedRoute.snapshot.params["productId"];
  faqForm!: FormGroup;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.faqForm = this.fb.group({
      question: [null, Validators.required],
      answer: [null, Validators.required]
    });
  }

  postFaq() {
    const productId = this.productId;
    const faqForm = this.faqForm.value;

    this.adminService.postFaq(productId, faqForm).subscribe(res => {
      if (res.id != null) {
        this.snackBar.open('FAQ posted successfully!', 'Close', {
          duration: 5000
        });
        this.router.navigateByUrl('/admin/dashboard');
      } else {
        this.snackBar.open("Something went wrong", 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }

}
