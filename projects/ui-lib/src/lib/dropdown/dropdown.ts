import {
  Component,
  input,
  output,
  signal,
  computed,
  ElementRef,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DropdownOption {
  label: string;
  value: any;
  disabled?: boolean;
}

@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.scss'],
})
export class DropdownComponent {
  // Inputs
  options = input<DropdownOption[]>([]);
  placeholder = input<string>('Select...');
  label = input<string>('');
  disabled = input<boolean>(false);

  // Output
  valueChange = output<any>();

  // State
  isOpen = signal(false);
  selected = signal<any>(null);
  search = signal('');

  container = viewChild<ElementRef>('container');

  filteredOptions = computed(() => {
    const term = this.search().toLowerCase();
    return this.options().filter(o =>
      o.label.toLowerCase().includes(term)
    );
  });

  toggle() {
    if (this.disabled()) return;
    this.isOpen.update(v => !v);
  }

  select(option: DropdownOption) {
    if (option.disabled) return;
    this.selected.set(option.value);
    this.isOpen.set(false);
    this.valueChange.emit(option.value);
  }

  getLabel() {
    const found = this.options().find(o => o.value === this.selected());
    return found?.label || '';
  }
}