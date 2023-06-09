import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
export class NavBarComponent {
  darkModeActive: boolean = false;

  onChange(newValue: boolean): void {
    this.darkModeActive = newValue
    this.applyDarkModeStyles();
  }

  private applyDarkModeStyles() {
    const body = document.getElementsByTagName('body')[0];

    if (this.darkModeActive) {
      body.style.backgroundColor = 'gray';
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = '';
      body.style.color = '';
    }
  }
}
