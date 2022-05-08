import { Component, OnInit } from '@angular/core';

import { IProduct } from '../shared Classes and types/IProduct';
import { ICategory } from '../shared Classes and types/ICategory';
import { DiscountOffers } from '../shared Classes and types/DiscountOffers';
import { ProductServiceService } from './../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  discount?: DiscountOffers;
  storeName?: string;
  storeLogo?: string;
  productList?: IProduct[];
  categoryList?: ICategory[];
  clientName?: string;
  isPurshased?: boolean;
  loaded: boolean = false;

  constructor(private productService: ProductServiceService) {
    this.discount = DiscountOffers.TEN_PERCENT;
    this.storeName = "Noon";
    this.storeLogo = "data:image/png;base64,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";
    this.productList = [];
    this.categoryList = [
      {id: 1,  name: 'Mobile Phones'},
      {id: 2,  name: 'Tablets'},
      {id: 3,  name: 'Labtops'}
    ];
    this.clientName = "";
    this.isPurshased = false;
   }

   executeBuy(){
     this.isPurshased = true;
   }

  ngOnInit(): void {
  }

  renderValues(): void{
    this.productList = this.productService.getAllProducts();
    this.loaded = true;
  }

}
