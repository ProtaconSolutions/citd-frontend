import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ng2-webstorage';

import { ChannelService, ChannelEvent } from '../../shared/services/channel';
import { ConnectionState } from '../../shared/services/channel/connection-state.enum';

export interface ITimeData {
  Interval: number;
  TimeLeft: number;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  public control: FormControl = new FormControl();
  public timeLeft: number;
  public opacity: number;
  public codeInput: string;
  private code$: Observable<any>;

  constructor(
    private channelService: ChannelService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.channelService.start();

    this.channelService.connectionState$.subscribe((state: ConnectionState) => {
      console.info(`Connection state changed to: ${state}`);

      if (state === ConnectionState.Connected) {
        this.channelService.sub('time').subscribe((event: ChannelEvent) => {
          this.handleTimeUpdate(event.Data);
        });

        this.channelService.sub('compileRequest').subscribe(this.handleEventCompileRequest);

        this.code$ = this.control.valueChanges
          .debounceTime(500)
          .do(code => {
            let event = new ChannelEvent();

            event.Data = {
              guid: this.storage.retrieve('guid'),
              code: code,
            };
            event.Name = 'code';
            event.ChannelName = 'code';

            this.channelService.publish(event);
          });

        this.code$.subscribe();
      }
    });

    this.channelService.error$.subscribe(error => {
      console.error('Error', error);
    });
  }

  private handleEventCompileRequest() {
    console.info('Got compileRequest message');

    let event = new ChannelEvent();

    event.Data = {
      guid: this.storage.retrieve('guid'),
      input: this.codeInput,
    };
    event.Name = 'compileRequest';
    event.ChannelName = 'compileRequest';

    this.channelService.publish(event);
  }

  private handleTimeUpdate(data: ITimeData) {
    console.info('Got time message', data);

    // Reset player input when times is up...
    if (data.TimeLeft === data.Interval) {
      this.codeInput = '';
    }

    this.timeLeft = data.TimeLeft;
    this.opacity = data.TimeLeft / data.Interval;
  }
}
