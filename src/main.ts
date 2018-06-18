/* main.ts is the first file read by Angular. */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Start the Angular app with our AppModule first.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
