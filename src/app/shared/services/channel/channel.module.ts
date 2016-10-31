import { NgModule, ModuleWithProviders } from '@angular/core';
import { ChannelConfig } from './channel-config';

let channelConfig = new ChannelConfig();
channelConfig.url = "http://localhost:5000/";
channelConfig.hubName = "";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [],
})

export class ChannelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChannelModule,
      providers: [
        {
          provide: 'channel.config',
          useValue: channelConfig,
        },
        {
          provide: 'Window',
          useValue: window
        },
      ],
    };
  }
}
