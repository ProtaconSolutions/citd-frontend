import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { ChannelService, ChannelEvent } from '../../shared/services/channel';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  public control: FormControl = new FormControl();
  public timeLeft: number = 0;
  private code$: Observable<any>;

  constructor(
    private channelService: ChannelService
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

        event.Data = input;
        event.Name = 'code';
        event.ChannelName = 'code';

        this.channelService.publish(event);
      });

    this.code$.subscribe();
  }
}
