
import {Component ,Injectable} from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;

  }


  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All" ?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return [
      { name: 'All', count: 12 },
      { name:'FastFood', count: 11 },
      { name: 'Lunch', count: 3},
      { name: 'Sandwich' , count: 1},
      { name:'Pizza ', count: 2 },
      { name: 'Momo', count: 2 },
     { name: 'Noodle', count: 2 },
      { name: 'Fries', count: 2 },

      { name: 'Manchurian', count: 1 },




    ];
  }

  getAll():Foods[]{
    return  [

      {
        id: 1,
        name:'Fried Potatoes',
        price: 2,
        cookTime: '10-15',
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Fries'],

      },

      {
        id: 2,
        name:'Pizza  pepperoni',
        price: 10,
        cookTime: '10-15',

        favorite: true,
        origins: ['italy'],
        star: 4.7,
        imageUrl:   '/assets/food-7.jpg',
        tags: ['FastFood','Pizza ' ],

      },
      {
        id: 3,
        name:'Momo',
        cookTime: '10-15',
        price: 15,
        favorite: true,
        origins: ['Nepal','tibet'],
        star: 4.5,
        imageUrl:   '/assets/images.jpeg' ,
        tags: ['FastFood', 'Momo',]

      },
      {
        id: 4,
        name:'Meetball',
        price: 20,
        cookTime:'25-30' ,

        favorite: true,
        origins: ['persia','middle east','china'],
        star: 4.7,
        imageUrl: '/assets/food-6.webp',
        tags: [ 'SlowFood','Lunch'],

      },

      {
        id: 5,
        name:'chicken  leg piece',
        cookTime: '25-30',
        price: 25,
        favorite: true,
        origins: ['India'],
        star: 4.5,
        imageUrl:   '/assets/food.11.webp' ,
        tags: [ 'chicken ','Lunch'],

      },
      {
        id: 6,
        name:'Noodle',
        cookTime: '10-15',
        price: 10,
        favorite: true,
        origins: ['Eueopean','Asian'],
        star: 4.5,
        imageUrl:  '/assets/food-5.jpg',
        tags: ['FastFood', 'Noodle'],

      },
      {
        id: 7,
        name:'Manchurian',
        cookTime: '10-15',
        price: 12,
        favorite: true,
        origins: ['India'],
        star: 4.5,
        imageUrl:'/assets/food-8.jpg',
        tags: ['FastFood', 'Manchurian'],

      },
      {
        id: 8,
        name:'Sandwich',
        cookTime: '10-15',
        price: 5,
        favorite: true,
        origins: ['India'],
        star: 4.5,
        imageUrl:   '/assets/image-9.jpg',
        tags: ['FastFood', 'Sandwich'],

     },

      {
      id: 9,
        name:'Pizza  chicken chees',
        price: 10,
        cookTime: '10-15',

        favorite: true,
        origins: ['italy'],
        star: 4.7,
        imageUrl:  '/assets/food-71.jpg',
        tags: ['FastFood','Pizza ' ],
      },
      {
        id: 10,
        name:'idli sambar',
        price: 10,
        cookTime: '15-20',

        favorite: true,
        origins: ['South Indian'],
        star: 4.7,
        imageUrl:  '/assets/image-300.jpg',
        tags: ['FastFood' ,'Lunch'],
      },
      {
        id: 11,
        name:'Shoestring Fries',
        price: 5,
        cookTime: '10-15',

        favorite: true,
        origins: ['Indian'],
        star: 4.7,
        imageUrl:  '/assets/food-21.jpg',
        tags: ['FastFood','Fries' ],
      },
      {
      id: 12,
      name:'Tanduri Momo',
      price: 20,
      cookTime: '20-25',

      favorite: true,
      origins: ['Indian'],
      star: 4.7,
      imageUrl:  '/assets/image-0.webp',
      tags: ['FastFood','Momo' ],
      }

    ]
  }
}
