import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('singleProduct') singleProduct: IProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 },
  };
  @Input() showdtl: boolean = false;

  constructor(private route: Router) {}

  ngOnInit(): void {}
  goHome() {
    this.route.navigate(['/products']);
  }
}
