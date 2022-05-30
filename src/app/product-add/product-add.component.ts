import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../interfaces/iproduct';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  id?: number = 0;
  length?: number = 0;
  products?: IProduct[] = [];
  myform = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl(
      'https://via.placeholder.com/600/771796',
      Validators.required
    ),
    price: new FormControl('', Validators.required),
  });
  get title() {
    return this.myform.get('title') as FormControl;
  }
  get description() {
    return this.myform.get('description') as FormControl;
  }
  get image() {
    return this.myform.get('image') as FormControl;
  }
  get price() {
    return this.myform.get('price') as FormControl;
  }
  constructor(
    private productService: ProductServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
  add(data: any) {
    this.length = this.products?.length;
    // this.id = this.length+1;
    this.id = this.length;
    data = { id: this.id , ...data };
    this.productService.addProduct(data);
    // this.productService.products?.push(data);
    console.log(data);
    this.route.navigate(['/products']);
  }
}
