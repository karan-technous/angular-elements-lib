import 'zone.js';

import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { App } from './app/app';
import { appConfig } from './app/app.config';

import { ButtonComponent } from 'ui-lib';
import { DropdownComponent } from 'ui-lib';

(async () => {
  //  Start Angular App
  const appRef = await createApplication(appConfig);

  //  Register Web Component
  const ButtonElement = createCustomElement(ButtonComponent, {
    injector: appRef.injector,
  });

  customElements.define('ui-button', ButtonElement);

  // register web component
  const DropdownElement = createCustomElement(DropdownComponent, {
    injector: appRef.injector,
  });
  customElements.define('ui-dropdown', DropdownElement);
  // Bootstrap your App UI
  appRef.bootstrap(App);
})();
