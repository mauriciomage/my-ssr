import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // provide server side rendering functionality to the App
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig); // merge between both cconfigs cliebnt app and server
