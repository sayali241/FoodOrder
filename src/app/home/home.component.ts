import { Component ,OnInit} from '@angular/core';
import { FoodComponent } from '../services/food/food/food.component';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']


})
export class HomeComponent implements OnInit {
  foods:Foods[]= [];
  constructor(private  Fc:FoodComponent, private router:ActivatedRoute) { }


ngOnInit(): void {
    this.router.params.subscribe(params =>{
         if(params['searchItem'])
         this.foods = this.Fc.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
         else if(params['tag'])
         this.foods= this.Fc.getAllFoodByTag(params['tag'])
         else
         this.foods = this.Fc.getAll();
    })



}


}
