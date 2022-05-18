import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _password = '';

  get password() {
    return this._password; 
  }

  set password(value: string) {
     this._password = value;
   }

   onButtonClick = () => {
    this.password = 'Random String';
  };
}
