import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartDisplaComponent } from './cart-displa/cart-displa.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: {title: 'Home Page'}
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    data: {title: 'Catalog'}
  },
  {
    path: 'catalog/item/:id',
    component: ItemComponent,
    data: {title: 'Item'}
  },
  {
    path: 'cart',
    component: CartDisplaComponent,
    data: {title: 'Cart'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: {title: 'Error 404'}
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
