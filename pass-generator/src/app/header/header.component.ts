import { Component, EventEmitter, Output } from '@angular/core';

import { Tabs } from './enums/tabs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Output() public passwordTabEvent = new EventEmitter<boolean>();
    @Output() public numberTabEvent = new EventEmitter<boolean>();

    public isPasswordTab = false;
    public isNumberTab = false;
    public tab = Tabs;

    public choosePasswordTab(value: boolean): void {
        this.isNumberTab = false;
        this.isPasswordTab = true;
        this.passwordTabEvent.emit(value);
    }

    public chooseNumberTab(value: boolean): void {
        this.isPasswordTab = false;
        this.isNumberTab = true;
        this.numberTabEvent.emit(value);
    }

    public reloadPage(): void {
        location.reload();
    }
}
