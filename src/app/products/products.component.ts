import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ProductComponent } from './../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(ProductComponent) productComponent: ProductComponent = new ProductComponent(new ProductServiceService());

  
  handleLoadProductsButtonPress(){
    this.productComponent.renderValues();
  }
}
