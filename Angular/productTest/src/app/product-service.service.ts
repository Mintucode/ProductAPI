import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './Model/Product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private BASE_URL='https://localhost:44380/api/product';
  constructor(private httpClient:HttpClient) { }

  GetProductList(){
    return this.httpClient.get<Product[]>(this.BASE_URL);
  }
  GetProduct(productId: string){
    return this.httpClient.get<Product>(`${this.BASE_URL}/${productId}`);

  }
  CreateProduct(product: Product){
    return this.httpClient.post(this.BASE_URL, product);
  }
  DeleteProduct(productId:string){
    return this.httpClient.delete(`${this.BASE_URL}/${productId}`);
  }
  UpdateProduct(productid:string, product: Product){
    return this.httpClient.put(`${this.BASE_URL}/${productid}`, product);
  }

}
