import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _useLetters: boolean = false;
  private _useNumber: boolean = false;
  private _useSymbol: boolean = false;
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
    return this._useNumber;
  }

  set useNumbers(value: boolean) {
    this._useNumber = value;
  }

  get useSymbols() {
    return this._useSymbol;
  }

  set useSymbols(value: boolean) {
    this._useSymbol = value;
  }

  onButtonClick = () => {
    this.password = 'Random String';
  };
}
