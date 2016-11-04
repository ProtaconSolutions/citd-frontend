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
  private code$: Observable<any>;

  constructor(
    private channelService: ChannelService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.channelService.start();

    this.channelService.sub('time').subscribe(
      (event: ChannelEvent) => this.timeLeft = event.Data
    );

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
