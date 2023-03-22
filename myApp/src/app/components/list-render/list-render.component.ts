import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Bob', type: 'Dog', age: 10 },
    { name: 'Jane', type: 'Turtle', age: 20 },
    { name: 'Lili', type: 'Cat', age: 5 },
  ];
  animalDetails = '';

  constructor(private listService: ListService) {}

  showAge(animal: Animal): void {
    this.animalDetails = `${animal.name} is ${animal.age} years old`;
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.listService.remove(this.animals, animal);
  }
}
