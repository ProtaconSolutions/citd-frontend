import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ng2-webstorage';

import { ChannelService, ChannelEvent } from '../../shared/services/channel';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  public control: FormControl = new FormControl();
  public timeLeft: number = 0;
  public playerReady: boolean = false;
  public gameOn: boolean = false;
  public codeInput: string;
  private code$: Observable<any>;
  private players: Array<any>;


  constructor(
    private channelService: ChannelService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.channelService.start();

    this.channelService.sub('time').subscribe(
      (event: ChannelEvent) => {
        console.log(event);
        this.timeLeft = event.Data
      }
    );

    this.channelService.sub('compileRequest').subscribe(
      () => {
        let event = new ChannelEvent();

        event.Data = {
          guid: this.storage.retrieve('guid'),
          input: this.codeInput,
        };
        event.Name = 'compileRequest';
        event.ChannelName = 'compileRequest';

        this.channelService.publish(event);
      }
    );

    /*
    this.channelService.sub('nicks').subscribe(
      (event: ChannelEvent) => {
        // New player
        if (event.Name === 'nickEntry') {
          this.players.push({
            nick: event.Data.nick,
            guid: event.Data.guid,
            ready: false
          });
        }

        if (event.Name === 'playerReady') {
          this.players.map((player) => {
            if (player.guid === event.Data.guid) {
              player.ready = true;
            }
          });

          if (this.players.filter((player) => player.ready).length === this.players.length) {
            this.gameOn = true;
          }
        }
      }
    );
    */

    this.code$ = this.control.valueChanges
      .debounceTime(500)
      .do(input => {
        let event = new ChannelEvent();

        event.Data = {
          guid: this.storage.retrieve('guid'),
          input: input,
        };
        event.Name = 'code';
        event.ChannelName = 'code';

        this.channelService.publish(event);
      });

    this.code$.subscribe();
  }

  public ready() {
    let event = new ChannelEvent();

    event.Data = this.storage.retrieve('guid');
    event.Name = 'playerReady';
    event.ChannelName = 'nicks';

    this.channelService.publish(event);
  }
}
