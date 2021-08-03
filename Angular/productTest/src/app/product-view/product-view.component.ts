import { Component, OnInit } from '@angular/core';

import { Product } from '../Model/Product.model';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  productList=null;

  

  constructor(private productService : ProductServiceService ) { }

  ngOnInit(): void {
    this.productService.GetProductList().subscribe((res:any)=>{
      //console.log(res);
      this.productList=res;
      //console.log(this.productList);
    })
  }

}
