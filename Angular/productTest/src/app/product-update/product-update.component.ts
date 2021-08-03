import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService:ProductServiceService, private fg:FormBuilder) { }
  isUpdate=true;
  productList=null;
  
  productForm = this.fg.group(
    {
      productid: [''],
      productname: [''],
      price:[0],
      description:['']
    }
  );


  ngOnInit(): void {
    this.productService.GetProductList().subscribe((res:any)=>{
      //console.log(res);
      this.productList=res;
      //console.log(this.productList);
    })
  }
  onUpdate(productId:string){

    this.productService.GetProduct(productId).subscribe((res:any)=>{
      this.productForm.patchValue(res);
      //console.log(res);
    })
    this.isUpdate=false;
   

  }
  onUpdateProduct(){
    this.productService.UpdateProduct(this.productForm.get("productid")?.value, this.productForm.value).subscribe(()=>{
      alert("successfully Update..")
    })
  }


}
