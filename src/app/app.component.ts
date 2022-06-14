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
  private _passwordLength: number = 0;

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

  get passwordLength() {
    return this._passwordLength;
  }

  set passwordLength(event: number) {
    this._passwordLength = event;
  }

  onButtonClick = () => {
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnñopqrstuvwxyz';
    const symbols: string = '!"·$%&/()=?¿';

    let validChars: string = '';
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword: string = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  };
}
