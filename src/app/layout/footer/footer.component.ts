import { Component, ViewEncapsulation } from '@angular/core';

import { FooterItemInterface } from './interfaces/';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FooterComponent {
  public version = require('../../../../package.json').version;

  public links: FooterItemInterface[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/ProtaconSolutions/citd-frontend',
      icon: 'web',
    },
    {
      name: 'Issues',
      url: 'https://github.com/ProtaconSolutions/citd-frontend/issues',
      icon: 'bug_report',
    },
    {
      name: 'Protacon Solutions Ltd',
      url: 'https://github.com/ProtaconSolutions',
      icon: 'person',
    },
  ];
}
