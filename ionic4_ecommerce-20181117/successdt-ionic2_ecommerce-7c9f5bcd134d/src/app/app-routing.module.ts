import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  {path: 'cart', loadChildren: './cart/cart.module#CartPageModule'},
  {path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule'},
  {path: 'category/:id', loadChildren: './category/category.module#CategoryPageModule'},
  {path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule'},
  {
    path: 'currency-convert',
    loadChildren: './currency-converter/currency-converter.module#CurrencyConverterPageModule'
  },
  {path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule'},
  {path: 'item/:id', loadChildren: './item/item.module#ItemPageModule'},
  {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  {path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountPageModule'},
  {path: 'my-order', loadChildren: './my-order/my-order.module#MyOrderPageModule'},
  {path: 'order-confirm', loadChildren: './order-confirm/order-confirm.module#OrderConfirmPageModule'},
  {path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  {path: 'search', loadChildren: './search/search.module#SearchPageModule'},
  {path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule'},
  {path: 'store', loadChildren: './store/store.module#StorePageModule'},
  {path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule'},
  {path: 'wish-list', loadChildren: './wish-list/wish-list.module#WishListPageModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
