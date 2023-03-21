import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';
  userName = 'Emily';
  userData = {
    email: 'diassousa@yahoo.com.br',
    role: 'Developer',
  };
}
