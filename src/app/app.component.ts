import { Component, OnInit } from '@angular/core';
import { ChannelService } from './shared/services/channel/channel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  /**
   * Constructor of the class.
   *
   * @param {ChannelService}  channelService
   */
  public constructor(private channelService: ChannelService) { }

  /**
   * On main component init life cycle hook, we want to start SignalR connection
   */
  public ngOnInit(): void {
    this.channelService.start();
  }
}
