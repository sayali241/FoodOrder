import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodComponent } from '../services/food/food/food.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food! : Foods;
  constructor(private activatedRoute:ActivatedRoute,
             private foodComponent:FoodComponent,
             private cartService:CartService,
             private router:Router)
    {
      activatedRoute.params.subscribe((params) => {
        if(params['id'])
        this.food = foodComponent.getFoodById(params['id'])
      })
     }


  ngOnInit(): void {

  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
