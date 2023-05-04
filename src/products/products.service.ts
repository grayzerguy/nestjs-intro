import { Product } from './product.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    Product : Product[] = [];
    insertProduct( title:string, desc:string, price:number){

        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.Product.push(newProduct);
        return prodId;
    }
}
