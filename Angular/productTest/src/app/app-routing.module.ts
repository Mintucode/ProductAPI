import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  {path:'productView', component: ProductViewComponent},
  {path:'addProduct', component:ProductAddComponent},
  {path:'deleteProduct', component: DeleteProductComponent},
  {path:'updateProduct', component:ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
