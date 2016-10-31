import { Component, OnInit } from '@angular/core';

import { ChannelService, ChannelEvent } from '../shared/services/channel/';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})

export class ExampleComponent implements OnInit {
  constructor(
    private channelService: ChannelService
  ) { }

  ngOnInit() {
    this.channelService.start();

    this.channelService.sub('messageLoops').subscribe(
      (event: ChannelEvent) => {
        console.log('Got event!', event);
      },
      (error: any) => {
        console.log('Fuuuuucck!', error);
      }
    );
  }
}
