export default {
  title: 'Components/Button',
};

export const Primary = () => {
  const wrapper = document.createElement('div');

  wrapper.innerHTML = `
    <ui-button type="primary" label="Click Me"></ui-button>
  `;

  const btn = wrapper.querySelector('ui-button') as HTMLElement;

  btn.addEventListener('clicked', (e: any) => {
    console.log('Clicked:', e.detail);
  });

  return wrapper;
};

export const Secondary = () => `
  <ui-button type="secondary">
    Cancel
  </ui-button>
`;

export const Disabled = () => `
  <ui-button disabled="true">
    Disabled
  </ui-button>
`;
