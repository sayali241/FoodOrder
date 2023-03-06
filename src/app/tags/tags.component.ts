import { Component,Input,OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodComponent } from '../services/food/food/food.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center'
  tags?:Tag[] =[];

  constructor(private Fc:FoodComponent){

  }
  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.Fc.getAllTag();

  }

}
