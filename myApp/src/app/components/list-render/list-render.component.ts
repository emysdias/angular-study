import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    { name: 'Bob', type: 'Dog' },
    { name: 'Jane', type: 'Turtle' },
    { name: 'Lili', type: 'Cat' },
  ];
}
