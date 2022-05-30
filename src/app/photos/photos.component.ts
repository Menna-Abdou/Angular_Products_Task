import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: any;
  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productService.getPhotos().subscribe((x) => {
      this.photos = x;
    });
  }
}
