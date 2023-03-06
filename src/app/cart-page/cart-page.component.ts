import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { FoodComponent } from '../services/food/food/food.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService){             //after design this page i will remove it

    
    this.setCart();
  }

  ngOnInit(): void {

  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); //instance lode data
  }

  changeQuantity(cartItem:CartItem, quantityInstring:string){
    const quantity = parseInt(quantityInstring);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }

}
