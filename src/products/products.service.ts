import { Product } from './product.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    private Products : Product[] = [];
    insertProduct( title:string, desc:string, price:number){

        const prodId = Date.now().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.Products.push(newProduct);
        return prodId;

    }
    getAllProducts(){
        return [...this.Products];
    }
}
