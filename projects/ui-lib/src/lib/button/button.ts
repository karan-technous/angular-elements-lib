import { Component, input, output } from '@angular/core';

@Component({
  selector: 'ui-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {
  label = input<string>('Click Me');
  type = input<'primary' | 'secondary'>('primary');

  clicked = output<void | string>();

  handleClick() {
    this.clicked.emit('hel');
  }
}
