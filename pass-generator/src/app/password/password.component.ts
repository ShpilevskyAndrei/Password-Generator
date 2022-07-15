import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ALL_SIGNS, ALL_SIGNS_L } from '../../consts/consts';
import { CopyText } from '../../shared/copy-text';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
    public title = 'Random password';
    public password: string | undefined;
    public passwordLength = new FormControl();
    public passwordCopied = false;
    public spinner = false;

    public getRandomInt(): number {
        return Math.floor(Math.random() * ALL_SIGNS_L);
    }

    public getRandomSign(): string {
        if (!this.getRandomInt) {
            return '';
        }
        return ALL_SIGNS[this.getRandomInt()];
    }

    public getPassword(passwordLength: number): string | undefined {
        this.passwordCopied = false;
        if (!passwordLength) {
            passwordLength = 10;
        }
        let i = 1;
        this.password = this.getRandomSign();
        if (this.password) {
            while (i < passwordLength) {
                this.password = this.password + this.getRandomSign();
                i++;
            }
            return this.password;
        }
        return '';
    }

    public copyPassword(): void {
        if (this.password) {
            CopyText(this.password);
            this.passwordCopied = true;
        }
    }

    public spin(): void {
        this.spinner = true;
        setTimeout(() => this.spinner = false, 250);
    }
}
