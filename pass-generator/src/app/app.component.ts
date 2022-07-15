import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public isPasswordTab: boolean | undefined;
    public isNumberTab: boolean | undefined;

    public choosePasswordTab(value: boolean): void {
        this.isNumberTab = false;
        this.isPasswordTab = value;
    }

    public chooseNumberTab(value: boolean): void {
        this.isPasswordTab = false;
        this.isNumberTab = value;
    }
}
