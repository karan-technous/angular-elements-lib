import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  protected readonly title = signal('ui-elements');

  clickedFun(e: any) {
    console.log('called', e);
  }

  onChange(e: any) {
    console.log('first=', e);
  }
}
