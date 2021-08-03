import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private fg:FormBuilder, private productService : ProductServiceService) { }

  productForm = this.fg.group(
    {
      productid: [''],
      productname: [''],
      price:[0],
      description:['']
    }
  );

  isCreated = true;

  ngOnInit(): void {
  }

  onSubmit(){
    this.productService.CreateProduct(this.productForm.value).subscribe(()=>{
      //console.log("product created");
      //alert("successfully created");
      this.isCreated=false;
    }

    )

  }

}
