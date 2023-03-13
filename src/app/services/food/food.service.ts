import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getFoodById(id:number):Food{
  return this.getAll().find(food=> food.id==id)!;
}

getAllTags():Tag[]{
  return[


      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Prânz', count: 3 },
      { name: 'Mâncare ușoară', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Prăjit', count: 1 },
      { name: 'Supe', count: 1 },
      {name: 'Prăjituri', count: 1},
  ];
}
getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
  return this.getAll().filter(
    food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAll():Food[]{
    return[
      {
        id: 5,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 32,
        favorite: false,
        origins: ['Italia'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza2.jpg',
        tags: ['FastFood', 'Pizza', 'Prânz'],
      },
      {
        id: 2,
        name: 'Chifteluțe',
        price: 30,
        cookTime: '20-30',
        favorite: true,
        origins: ['China'],
        stars: 4.7,
        imageUrl: '/assets/images/meatballs.jpg',
        tags: ['Mâncare ușoară', 'Prânz'],
      },
      {
        id: 1,
        name: 'Hamburger',
        price: 15,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germania'],
        stars: 3.5,
        imageUrl: '/assets/images/burger.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 7,
        name: 'Cartofi prăjiți',
        price: 7,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgia'],
        stars: 3.3,
        imageUrl: '/assets/images/fries.jpg',
        tags: ['FastFood', 'Prăjit'],
      },
      {
        id: 3,
        name: 'Supă de pui',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Asia'],
        stars: 3.0,
        imageUrl: '/assets/images/soup.jpg',
        tags: ['Mâncare ușoară', 'Supe'],
      },

      {
        id: 6,
        name: 'Prăjitură de ciocolată',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Franța'],
        stars: 3.0,
        imageUrl: '/assets/images/cake.jpg',
        tags: ['Prăjituri'],
      },
      {
        id: 4,
        name: 'Pizza Vegana',
        price: 28,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italia'],
        stars: 4.0,
        imageUrl: '/assets/images//pizza.jpg',
        tags: ['FastFood', 'Pizza'],
      },
       ]

  }
}
