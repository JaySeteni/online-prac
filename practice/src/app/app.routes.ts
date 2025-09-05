import { Routes } from '@angular/router';

// User imports
import { Home } from './comps/home/home';
import { Signup } from './comps/signup/signup';
import { Signin } from './comps/signin/signin';
import { Cart } from './comps/cart/cart';
import { Categories } from './comps/categories/categories';
import { Checkout } from './comps/checkout/checkout';
import { Delivery } from './comps/delivery/delivery';
import { Favourites } from './comps/favourites/favourites';
import { Navigation } from './comps/navigation/navigation';
import { Orders } from './comps/orders/orders';
import { ViewOrder } from './comps/view-order/view-order';
import { ViewProduct } from './comps/view-product/view-product';
import { Products } from './comps/products/products';
import { Profile } from './comps/profile/profile';
import { Search } from './comps/search/search';
import { Settings } from './comps/settings/settings';
import { Landing } from './comps/landing/landing';
import { Spinner } from './comps/spinner/spinner';

// User imports end

//  User comps 
export const routes: Routes = [
      {path: '', redirectTo:'home' , pathMatch: 'full'},
      {path : 'signup', component: Signup},
      {path : 'signin', component: Signin},
      {path : 'home', component: Home},
      {path : 'products', component: Products},
      {path : 'view-product', component: ViewProduct},
      {path : 'view-order', component: ViewOrder},
      {path : 'orders', component: Orders},
      {path : 'cart', component: Cart},
      {path : 'checkout', component: Checkout},
      {path : 'profile', component: Profile},
      {path : 'categories', component: Categories},
      {path : 'delivery', component: Delivery},
      {path : 'favourites', component: Favourites},
      {path : 'landing', component: Landing},
      {path : 'navigation', component: Navigation},
      {path : 'search', component: Search},
      {path : 'settings', component: Settings},
      {path: 'spinner', component: Spinner},

    //   User comps end

];
