import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CopyText } from '../../shared/copy-text';

@Component({
    selector: 'app-number',
    templateUrl: './number.component.html',
    styleUrls: ['./number.component.css'],
})
export class NumberComponent {
    public title = 'Random number';

    public minNumber = new FormControl();
    public maxNumber = new FormControl();

    public number: number | undefined;
    public numbers: Array<number> | undefined;

    public numberCopied = false;
    public spinner = false;

    public getRandomIntNumber(): number {
        if (!this.numbers?.length) {
            return 0;
        }
        return Math.floor(Math.random() * this.numbers.length);
    }

    public getRandomSignNumber(): number {
        this.getNumbersArray();
        if (!this.getRandomIntNumber || !this.numbers) {
            return 0;
        } else {
            return this.number = this.numbers[this.getRandomIntNumber()];
        }
    }

    public getNumbersArray(): void {
        this.numberCopied = false;
        this.numbers = [this.minNumber.value || 1];
        const numbersLength: number =
            this.maxNumber.value || 1000000 - this.minNumber.value + 1;
        while (this.numbers.length < numbersLength) {
            this.numbers.push(+this.numbers.slice(-1) + 1);
        }
    }

    public copyNumber(): void {
        if (this.number) {
            CopyText(this.number);
            this.numberCopied = true;
        }
    }

    public spin(): void {
        this.spinner = true;
        setTimeout(() => this.spinner = false, 250);
    }
}
