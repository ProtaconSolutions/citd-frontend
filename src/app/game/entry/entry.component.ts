import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import { ChannelEvent, ChannelService } from '../../shared/services/channel/';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  public nick: string;

  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private channelService: ChannelService
  ) { }

  public ngOnInit() {
    this.channelService.start();

    this.channelService.sub('nicks').subscribe(
      (event: ChannelEvent) => {
        if (event.Type === 'login') {
          this.storage.store('guid', event.Data);

          this.router
            .navigate(['game/editor'])
            .then(() => {});
        }
      }
    );
  }

  public entry() {
    this.storage.store('nick', this.nick);

    const event = new ChannelEvent();

    event.Type = 'nickEntry';
    event.Data = {
      nick: this.nick
    };

    this.channelService.publish(event);
  }
}
