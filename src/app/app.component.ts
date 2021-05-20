import { Component, VERSION } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'JavaScript', 'TypeScript'];
  userModel = new User('', 'deechavhan', 1234567898, '', 'morning', true);
}
