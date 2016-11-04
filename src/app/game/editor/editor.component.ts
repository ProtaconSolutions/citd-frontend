import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ng2-webstorage';

import { ChannelService, ChannelEvent } from '../../shared/services/channel';

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
  public timeLeft: any;
  public codeInput: string;
  private code$: Observable<any>;

  constructor(
    private channelService: ChannelService,
    private storage: LocalStorageService
  ) {
    setInterval(() => { }, 1);
  }

  ngOnInit() {
    this.channelService.start();

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

  private handleEventCompileRequest() {
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
    this.timeLeft = data.TimeLeft;
  }
}
