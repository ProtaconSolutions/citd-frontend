import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import { ChannelEvent, ChannelService } from '../../shared/services/channel/';
import { ConnectionState } from '../../shared/services/channel/connection-state.enum';

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
    this.channelService.connectionState$.subscribe((state: ConnectionState) => {
      if (state === ConnectionState.Connected) {
        this.subscribeEvents();
      }
    });
  }

  public entry() {
    this.storage.store('nick', this.nick);

    const event = new ChannelEvent();

    event.Name = 'nickEntry';
    event.Data = {
      nick: this.nick
    };

    this.channelService.publish(event);

    this.router
      .navigate(['game/editor'])
      .then(() => {});
  }

  /**
   * Method to subscribe all the needed events and create necessary subscriptions.
   */
  private subscribeEvents(): void {
    this.channelService.sub('nicks').subscribe(
      (event: ChannelEvent) => {
        if (event.Name === 'login') {
          this.storage.store('guid', event.Data);

          this.router
            .navigate(['game/editor'])
            .then(() => {});
        }
      }
    );
  }
}
