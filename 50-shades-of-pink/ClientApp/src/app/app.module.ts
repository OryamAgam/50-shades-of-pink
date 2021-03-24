import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CategoryShopComponent } from './components/category-shop/category-shop.component';
import { NavBarShopComponent } from './components/nav-bar-shop/nav-bar-shop.component';
import { CarouselMainShopComponent } from './components/carousel-main-shop/carousel-main-shop.component';
import { ListItemsShopComponent } from './components/list-items-shop/list-items-shop.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CategoryShopComponent,
    NavBarShopComponent,
    CarouselMainShopComponent,
    ListItemsShopComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
