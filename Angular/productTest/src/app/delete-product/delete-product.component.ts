import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productList=null;
  isDeleted=true;
  

  constructor(private productService : ProductServiceService ) { }

  ngOnInit(): void {
    this.productService.GetProductList().subscribe((res:any)=>{
      //console.log(res);
      this.productList=res;
      //console.log(this.productList);
    })
  }
  onDelete(productid : string){
    //console.log(productid);
    this.productService.DeleteProduct(productid).subscribe(()=>{
    this.isDeleted=false;
    alert("Delete product Id:"+productid);

    })

  }

}
