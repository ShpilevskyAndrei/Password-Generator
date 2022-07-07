import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ALL_SIGNS, ALL_SIGNS_L } from './password/consts/consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Random password';
  public randomInt: number | undefined;
  public password: string | undefined;
  public passwordLength = new FormControl();
  public passwordCopied = false;
  public spinner = false;

  public getRandomInt(): number {
    return (this.randomInt = Math.floor(Math.random() * ALL_SIGNS_L));
  }

  public getRandomSign(): string | undefined {
    if (!this.randomInt) {
      return '';
    }
    return ALL_SIGNS[this.randomInt];
  }

  public getItemPassword(): string | undefined {
    this.getRandomInt();
    return this.getRandomSign();
  }

  public getPassword(passwordLength: number): string | undefined {
    this.passwordCopied = false;
    if (!passwordLength) {
      passwordLength = 10;
    }
    let i = 1;
    this.password = this.getItemPassword();
    if (this.password) {
      while (i < passwordLength) {
        this.password = this.password + this.getItemPassword();
        i++;
      }
      return this.password;
    }
    return '';
  }

  public copyPassword(password: string): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = password;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.passwordCopied = true;
  }

  public spin(): void {
    this.spinner = true;
    setTimeout(() => (this.spinner = false), 250);
  }
}
