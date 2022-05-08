import { Injectable } from '@angular/core';
import { IProduct } from './../shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList: IProduct[] = [{
        id: 5,
        name: 'IPhone XS',
        quantity: 10,
        price: 10000,
        image: 'https://m.media-amazon.com/images/I/81N2BjAH2PL._AC_SY741_.jpg'
    },
    {
        id: 10,
        name: 'IPhone 11',
        quantity: 5,
        price: 20000,
        image: 'https://m.media-amazon.com/images/I/71Z8C1zRgAL._AC_SX679_.jpg'
    },
    {
        id: 11,
        name: 'Samsung Galaxy A52',
        quantity: 5,
        price: 20000,
        image: 'https://m.media-amazon.com/images/I/71YEFDxgeuS._AC_SL1500_.jpg'
    },
    {
        id: 11,
        name: 'Samsung Galaxy A52',
        quantity: 5,
        price: 20000,
        image: 'https://m.media-amazon.com/images/I/71YEFDxgeuS._AC_SL1500_.jpg'
    }
    ];
  

    getAllProducts(): IProduct[]{
      return this.productList;
    }

    getProductById(id: any): IProduct | null{
      if(typeof(id) != "number"){
        return null;
      }
      var p: IProduct | undefined = this.productList.find((product) => product.id == id);
      return p || null;
    }

  constructor() { }
}
