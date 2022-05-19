import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _useLetters: boolean = false;
  private _useNumbers: boolean = false;
  private _useSymbols: boolean = false;
  private _password: string = '';

  get password() {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get useLetters() {
    return this._useLetters;
  }

  set useLetters(value: boolean) {
    this._useLetters = value;
  }

  get useNumbers() {
    return this._useNumbers;
  }

  set useNumbers(value: boolean) {
    this._useNumbers = value;
  }

  get useSymbols() {
    return this._useSymbols;
  }

  set useSymbols(value: boolean) {
    this._useSymbols = value;
  }

  onButtonClick = () => {
    this.password = 'Random String';
  };
}
