import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../interfaces/iproduct';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products?: IProduct[];
  constructor(
    private productService: ProductServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
  goToAddProduct() {
    this.route.navigate(['/products/add']);
  }
  goToPhotos() {
    this.route.navigate(['/photos']);
  }
  goToLogin() {
    this.route.navigate(['/users/login']);
  }
}
