export default {
  title: 'Components/Dropdown',
};

export const Primary = () => {
  const wrapper = document.createElement('div');

  // Create element
  const dropdown = document.createElement('ui-dropdown') as any;

  // Set inputs properly
  dropdown.label = 'Select User';
  dropdown.options = [
    { label: 'John', value: 1 },
    { label: 'Jane', value: 2 },
  ];

  // Listen to output
  dropdown.addEventListener('valueChange', (e: any) => {
    console.log('Selected value:', e.detail);
  });

  wrapper.appendChild(dropdown);
  return wrapper;
};

export const WithPlaceholder = () => {
  const wrapper = document.createElement('div');
  const dropdown = document.createElement('ui-dropdown') as any;

  dropdown.label = 'Select User';
  dropdown.placeholder = 'Choose an option';
  dropdown.options = [
    { label: 'John', value: 1 },
    { label: 'Jane', value: 2 },
  ];

  dropdown.addEventListener('valueChange', (e: any) => {
    console.log('Selected value:', e.detail);
  });

  wrapper.appendChild(dropdown);
  return wrapper;
};

export const Disabled = () => {
  const wrapper = document.createElement('div');
  const dropdown = document.createElement('ui-dropdown') as any;

  dropdown.label = 'Select User';
  dropdown.disabled = true;
  dropdown.options = [
    { label: 'John', value: 1 },
    { label: 'Jane', value: 2 },
  ];

  wrapper.appendChild(dropdown);
  return wrapper;
};
