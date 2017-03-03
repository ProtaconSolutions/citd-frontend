import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'ng2-webstorage';

import 'rxjs/add/operator/debounceTime';

import { ITimeData } from '../../models/';
import { ChannelService, ChannelEvent } from '../../shared/services/channel';
import { ConnectionState } from '../../shared/services/channel/connection-state.enum';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit, OnDestroy {
  public control: FormControl = new FormControl();
  public timeLeft: number;
  public opacity: number;
  public codeInput: string;
  private code$: Observable<any>;
  private codeSubscription: Subscription;

  /**
   * Constructor of the class.
   *
   * @param {ChannelService}      channelService
   * @param {LocalStorageService} storage
   */
  public constructor(
    private channelService: ChannelService,
    private storage: LocalStorageService
  ) { }

  /**
   * OnInit life cycle method
   */
  public ngOnInit(): void {
    this.channelService.start();

    this.channelService.connectionState$.subscribe((state: ConnectionState) => {
      console.log(`Connection state changed to: ${state}`);

      if (state === ConnectionState.Connected) {
        this.subscribeEvents();
      }
    });

    this.channelService.error$.subscribe(error => {
      console.error('Error', error);
    });
  }

  /**
   * OnDestroy life cycle method
   */
  public ngOnDestroy(): void {
    if (this.codeSubscription) {
      this.codeSubscription.unsubscribe();
    }
  }

  /**
   * Method to subscribe all the needed events and create necessary subscriptions.
   */
  private subscribeEvents(): void {
    // Subscribe to 'time' stream
    this.channelService.sub('time').subscribe((event: ChannelEvent) => {
      this.handleTimeUpdate(event.Data);
    });

    // Subscribe to 'compileNeeded' stream
    this.channelService.sub('compileNeeded').subscribe(() => this.handleEventCompileNeeded());

    this.code$ = this.control.valueChanges
      .debounceTime(500)
      .do(code => {
        const event = new ChannelEvent();

        event.Data = {
          guid: this.storage.retrieve('guid'),
          code: code,
        };
        event.Type = 'code';

        this.channelService.publish(event);
      });

      this.codeSubscription = this.code$.subscribe();
  }

  /**
   * Method to handle 'compileRequest' events.
   */
  private handleEventCompileNeeded(): void {
    const event = new ChannelEvent();

    event.Data = {
      guid: this.storage.retrieve('guid'),
      input: this.codeInput,
    };
    event.Type = 'compileRequest';
    event.ConnectionId = 'compileRequest';

    this.channelService.publish(event);
  }

  /**
   * Method to handle time updates from server.
   *
   * @param {ITimeData} data
   */
  private handleTimeUpdate(data: ITimeData): void {
    // Reset player input when times is up...
    if (data.TimeLeft === data.Interval) {
      this.codeInput = '';
    }

    this.timeLeft = data.TimeLeft;
    this.opacity = data.TimeLeft / data.Interval;
  }
}
