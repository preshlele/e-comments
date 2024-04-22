import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartStore = signal<CartItem[]>([]);

  cart = computed(() => this.cartStore());
  private get cartItems(): CartItem[] {
    return this.cartStore();
  }

  addToCart (product: CartItem) {
    const existingItem =  this.cartStore().find(item => item.productId === product.productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartStore().push({ ...product, quantity: 1, price: product.price, title: product.title });
    }
  }



  

}
