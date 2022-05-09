import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'users', component: UsersPageComponent},
  {path: 'posts', component: PostsPageComponent},
  {path: '**', component: PageNotFoundPageComponent}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
