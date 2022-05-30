import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../interfaces/iproduct';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId?: any ;
  product?: IProduct;
  constructor(
    private activeroute: ActivatedRoute,
    private productService: ProductServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activeroute.params.subscribe((param) => {
      this.productId = param['id'];
      this.product = this.productService.getProductById(this.productId);
    });
  }
  goHome() {
    this.route.navigate(['/products']);
  }
}
