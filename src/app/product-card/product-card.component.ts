import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './../shared Classes and types/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() productData?: IProduct;

  ngOnInit(): void {
  }

}
